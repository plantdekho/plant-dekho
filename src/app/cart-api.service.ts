import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  items = JSON.parse(localStorage.getItem('cartItems') as string) || [];
  shipping: number= 60;

  cartDataList: any = [];
  productlist = new BehaviorSubject<any>([]);
  cart: any = JSON.parse(localStorage.getItem('data') as string);

  constructor( ) {}
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
      this.getcartcount();

    } 
    else{
      window.alert("item already exist");
    }

  }
  getcartcount(){
    return this.items.length;
  }
  getCartItems() {
    return this.items;
  }

  getgrandtotal(){
    let grandtotal= 0;
    this.items.map((a: any) => {
      grandtotal += a.price ;

    });
    return grandtotal + this.shipping;

  }
  
  getTotal(): number {
    let total = 0;
    this.items.map((a: any) => {
      total += a.price ;

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
}


//   const data = JSON.parse(localStorage.getItem('data') as string);
    //  data.splice(0,1);
    //  localStorage.setItem('data', JSON.stringify(data));
    // data.map((a:any,index:any)=>{
    //   if(product.id== a.id){
    //     delete data[index];
    //   }

    // })
    // this.cartDataList.map((a: any, index: any) => {
    //   if (product.id == a.id) {
    //     this.cartDataList.splice(index, 1);

    //   }
    // });