import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, public sanitizer: DomSanitizer) {}
  data: any;

  ngOnInit(): void {
    this.data = JSON.parse(history.state.data);
    console.log(this.data);
  }
}
