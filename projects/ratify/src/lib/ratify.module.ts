import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatifyComponent } from './ratify.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RatifyComponent],
  exports: [RatifyComponent]
})
export class RatifyModule { }
