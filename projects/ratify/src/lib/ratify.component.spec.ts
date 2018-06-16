import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatifyComponent } from './ratify.component';

describe('RatifyComponent', () => {
  let component: RatifyComponent;
  let fixture: ComponentFixture<RatifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
