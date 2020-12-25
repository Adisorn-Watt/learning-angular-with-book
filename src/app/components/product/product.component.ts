import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productID: string;
  public productName: string;
  public productPrice: number;

  constructor() { }

  ngOnInit(): void {
    this.productID = '001';
    this.productName = 'Logitech Wireless Mouse';
    this.productPrice = 3590;
  }

}
