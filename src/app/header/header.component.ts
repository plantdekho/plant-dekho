import { Component, OnInit } from '@angular/core';
import { CartApiService } from '../cart-api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuvariable:boolean=false;
  cartcount:number=0;

  constructor(private cartapi : CartApiService) { }

  ngOnInit(): void {
    this.cartcount = this.cartapi.getcartcount();
    this.cartapi.messageEmitter.subscribe(val => {
      this.cartcount = Number(val);
    });
  }
 

}
