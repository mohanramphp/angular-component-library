import {
  Component, OnInit,
  Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'lib-ratify',
  template: `
  <div class="rating">
      <ul class="list">
        <li
        class="star"
        *ngFor="let star of stars"
        [ngClass]="{ 'active': star <= grade }"
        (click)="rate(star)">
          <i class="fa" [ngClass]="star <= grade ? 'fa-star' : 'fa-star-o'" aria-hidden="true"></i>
        </li>
      </ul>
    <span *ngIf="showRatingCounter">{{ grade }} of {{ maxRating }}</span>
  </div>
  `,
  styles: [
    `
    .rating {
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      font-size: 22px;
      color: #a7a8a8;
    }

    .list {
      margin: 0 0 5px 0;
      padding: 0;
      list-style-type: none;
    }
    .list:hover .star {
      color: #f3d23e;
    }

    .star {
      display: inline-block;
      cursor: pointer;
    }
    /**
     * The general sibling combinator is made of the "tilde" (U+007E, ~)
     * character that separates two sequences of simple selectors.
     * The elements represented by the two sequences share the same parent in the document tree
     * and the element represented by the first sequence precedes (not necessarily immediately)
     * the element represented by the second one.
     **/
    .star:hover ~ .star:not(.active) {
      color: inherit;
    }

    .active {
      color: #f3d23e;
    }
    `
  ]
})
export class RatifyComponent implements OnInit {
  @Input() grade: number;
  @Input() maxRating: number;
  @Input() showRatingCounter: boolean;
  @Output() triggerRatingSelection: EventEmitter<number> = new EventEmitter<number>();
  stars: Array<number>;

  constructor() { }

  ngOnInit() {
    this.generateRatingSequence();
  }

  generateRatingSequence() {
    this.stars = Array.from({ length: this.maxRating }, (v, k) => k + 1);
  }

  rate(star: number) {
    this.grade = (star <= this.maxRating && star >= 0) ?
      (this.grade = this.grade === star ? star - 1 : star) : this.grade;
    this.triggerRatingSelection.emit(this.grade);
  }

}
