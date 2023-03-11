import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartApiService } from '../cart-api.service';
import { Indoor_Plants, Product } from '../product';
import { indoorplant, products } from '../product-json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private cartapi: CartApiService
  ) {}
  
  dataItem: any;
  name: any;
  items: Product[] = products;
  datas: Indoor_Plants[] = indoorplant;
  item: any;

  ngOnInit(): void {
    
    this.datas.forEach((a) => {
      this.items.push(a);
    });
    this.dataItem = this.route.params.subscribe((params) => {
      this.name = params['name'];
      this.item = this.items.find((item) => item.name === this.name);
    });
  }
  addtocart(item: any) {
    // this.cartapi.addToCart(item);
    this.cartapi.addtocart(item);
  }
  transferdata(itm: any) {
    
    this.router.navigate(['/detail', itm.name]);
  }
}
