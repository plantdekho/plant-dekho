import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartApiService } from 'src/app/cart-api.service';
import { Indoor_Plants } from '../../product';
import { indoorplant } from '../../product-json';



@Component({
  selector: 'app-indoor-plants',
  templateUrl: './indoor-plants.component.html',
  styleUrls: ['./indoor-plants.component.css']
})
export class IndoorPlantsComponent implements OnInit {
  data:Indoor_Plants[] = indoorplant;

  constructor( private router: Router, private cartapi: CartApiService ) { }

  ngOnInit(): void {


  }
  transferdata(itm: any) {
    this.router.navigate(['/detail',itm.name]);
   
  }
  addtocart(item: any) {
    // this.cartapi.addToCart(item);
    this.cartapi.addtocart(item);
  }

}
