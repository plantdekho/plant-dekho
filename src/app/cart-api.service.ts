import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root',
})
export class CartApiService {
  items = JSON.parse(localStorage.getItem('cartItems') as string) || [];

  cartDataList: any = [];
  productlist = new BehaviorSubject<any>([]);
  cart: any = JSON.parse(localStorage.getItem('data') as string);

  constructor() {}
  getProductData() {
    return this.productlist.asObservable();
  }
  data() {
    return JSON.parse(localStorage.getItem('data') as string);
  }

  addtocart(item: any) {
    const index = this.items.findIndex((i: { id: any; }) => i.id === item.id);
    if (index === -1) {
      this.items.push(item);
      localStorage.setItem('cartItems', JSON.stringify(this.items));
    } 
    else{
      window.alert("item already exist");
    }
   

    // this.items.push(item);
    // localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  getCartItems() {
    return this.items;
  }

  // addToCart(product: any) {
  //   this.cartDataList.push(product);
  //   localStorage.setItem('data', JSON.stringify(this.cartDataList));
  //   this.productlist.next(this.cartDataList);    
  //   this.getTotal();
    
  // }
  
  getTotal(): number {
    let grandtotal = 0;
    this.cartDataList.map((a: any) => {
      grandtotal += a.price;
    });
    return grandtotal;
  }

  removeCartItem(product: any) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
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