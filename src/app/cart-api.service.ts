import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartApiService {


  messageEmitter = new EventEmitter<String>();
  items = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  shipping: number = 60;

  cartDataList: any = [];
  productlist = new BehaviorSubject<any>([]);
  cart: any = JSON.parse(localStorage.getItem('data') as string);

  constructor() { }
  getProductData() {
    return this.productlist.asObservable();
  }
  data() {
    return JSON.parse(localStorage.getItem('data') as string);
  }

  addtocart(item: any) {
    const index = this.items.findIndex((i: { id: any; }) => i.id === item.id);
    console.log(index);
    if (index === -1) {
      this.items.push(item);
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
    else {
      window.alert("item already exist");
    }

  }
  getcartcount() {
    return this.items.length;
  }
  getCartItems() {
    return this.items;
  }

  getgrandtotal() {
    let grandtotal = 0;
    this.items.map((a: any) => {
      grandtotal += a.price * a.quantity;

    });
    return grandtotal + this.shipping;

  }

  getTotal(): number {
    let total = 0;
    this.items.map((a: any) => {
      total += a.price * a.quantity;

    });
    return total;
  }

  removeCartItem(product: any) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      window.location.reload();
      this.items.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      this.getTotal();
    }
  }

  changePrice(value: number, itemId: any) {
    console.log("value: " + value + " itemId: " + itemId);
    const index = this.items.findIndex((i: { id: any; }) => i.id === itemId);
    console.log(index);
    this.items[index].quantity = value;
    localStorage.setItem('cartItems', JSON.stringify(this.items));   
    window.location.reload(); 
  }

}

