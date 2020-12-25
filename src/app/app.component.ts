import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'learning-angular-with-book';  
  num1: number = 100;
  num2: number = 200;
  isShowing: boolean = false;

  addNumber() {
    return this.num1 + this.num2;
  }

  onShowData() {
    if (this.isShowing === true) {
      this.isShowing = false;
    } else if (this.isShowing === false) {
      this.isShowing = true;
    }
    console.log('Show Data Clicked : ', this.isShowing);
  }

  onKeyPressEnter($event) {
    // Enter button keycode's is 13
    if ($event.keyCode === 13) {
      console.log('Press Enter : ', $event.target.value);
    }
  }
}
