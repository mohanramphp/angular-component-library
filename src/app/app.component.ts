import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  grade = 0;
  maxRating = 5;
  showRatingCounter = true;
  myRating: number;

  selectedRating(rate: number) {
    console.log('your rating is');
    console.log(rate);
    this.myRating = rate;
  }
}
