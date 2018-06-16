# Angular Ratify

> This angular component library is planned to hold all different sort of rating components needed for an angular application development.

For now, one component is added in this library
```html
<lib-ratify 
[grade]="grade" 
[maxRating]="maxRating" [showRatingCounter]="showRatingCounter" (triggerRatingSelection)="selectedRating($event)"></lib-ratify>
```

# How to use?

1. Include our ratify module in ```app.module.ts```
```javascript
import { RatifyModule } from 'angular-ratify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatifyModule //<-- add the module in imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

2. Add the component ```<lib-ratify>``` where rating part is expected in your application

> To brief the signatures of the components as below

1. ```[grade]``` - pass the rating number to the app i.e. - If rating has to be pre-selected. **grade** - hold the default value of rating. | __type: *number*__
2. ```[maxRating]``` - pass the maximum rating stars needs to be rendered by that component. | __type: *number*__
3. ```[showRatingCounter]``` - this boolean value is to decide whether to show the rating value on the screen like 2 out of 5 | __type: *boolean*__
4. ```(triggerRatingSelection)``` - This callback will be triggered when user selects the rating in the component.

# Sample implementation

**```app.module.ts```**

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatifyModule } from 'angular-ratify';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**```app.component.html```**

```html
<div style="text-align:center">
  <h1>
    Lets rate it!
  </h1>
  <lib-ratify [grade]="grade" [maxRating]="maxRating" [showRatingCounter]="showRatingCounter" (triggerRatingSelection)="selectedRating($event)"></lib-ratify>
  <h1 *ngIf="myRating">
    Rated to {{myRating}}
  </h1>
</div>
```

**```app.component.ts```**

```javascript
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

```

# Component on screen
1. Initial rendering  

![Initial component rendered image](https://raw.githubusercontent.com/mohanramphp/angular-component-library/master/src/assets/images/initial-rendered-component.png)

2. While user hovering on rating component  

![Hovering on rating component image](https://raw.githubusercontent.com/mohanramphp/angular-component-library/master/src/assets/images/hovering.png)

3. Once, user rate  

![Rating component image](https://raw.githubusercontent.com/mohanramphp/angular-component-library/master/src/assets/images/final.png)

> Thank you, give a try. Welcome!