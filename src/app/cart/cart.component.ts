import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartApiService } from '../cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any = [];
  item: any = [];
  products: any = [];
  allproducts: any = 0;
  public total!: number;
  public grandtotal!: number;

  constructor(private cartapi: CartApiService, public sanitizer: DomSanitizer, private router: Router) {
    this.items = this.cartapi.getCartItems();
  }

  ngOnInit(): void {
    this.total = this.cartapi.getTotal();
    this.grandtotal = this.cartapi.getgrandtotal();
  }

  removedata(product: any) {
    this.cartapi.removeCartItem(product);
    this.cartapi.messageEmitter.emit(this.cartapi.getcartcount());
  }
  transferdata() {
    this.router.navigate(['shipping_form']);

  }
  onOptionsSelected(value: String, itemId: any) {
    this.cartapi.changePrice(Number(value), itemId);
  }
}
