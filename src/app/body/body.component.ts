import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  vendre:any=0;
  recevoir:any=0;
  temoin=565*this.vendre;



}
