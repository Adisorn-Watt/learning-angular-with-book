import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  url: string = 'https://www.google.com';
  
  constructor() { }

  ngOnInit(): void {
  }

}
