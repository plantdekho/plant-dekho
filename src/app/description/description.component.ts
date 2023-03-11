import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartApiService } from '../cart-api.service';
import { Indoor_Plants, Product } from '../product';
import { indoorplant, products } from '../product-json';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  
  
  item: Product[] = products;
  data:Indoor_Plants[] = indoorplant;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartapi: CartApiService
  ) {}

  ngOnInit(): void {
    
  }
 

 
  transferdata(itm: any) {
    this.router.navigate(['/detail',itm.name]);
   
  }
  addtocart(item: any) {
    this.cartapi.addtocart(item);
    var cartItem = this.cartapi.getcartcount();
    this.cartapi.messageEmitter.emit(cartItem);
        
  }
  
}
