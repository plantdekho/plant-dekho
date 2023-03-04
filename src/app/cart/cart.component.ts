import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartApiService } from '../cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items:any=[];
  item: any = [];
  products: any = [];
  allproducts: any = 0;
  public grandtotal!: number;

  constructor(
    private cartapi: CartApiService,
    public sanitizer: DomSanitizer
  ) {
    this.items = this.cartapi.getCartItems();
  }

  ngOnInit(): void {
    this.item = this.cartapi.data();
    //this.item= JSON.parse(this.cartapi.data());
    console.log(this.item);
    this.cartapi.getProductData().subscribe((res) => {
      this.products = res;
      this.grandtotal = this.cartapi.getTotal();
      console.log(this.grandtotal);
      // console.log(this.products);
    });

    //this.products= this.cartapi.data()
  }

  removedata(product: any) {
    this.cartapi.removeCartItem(product);
  }
}
