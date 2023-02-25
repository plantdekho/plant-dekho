import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { products } from '../product-json';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  item:Product[]=products;
  transferdata(itm:any){
    this.router.navigate(['/detail'],{state:{data:JSON.stringify(itm)}});


  }

 

}
