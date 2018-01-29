import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClock1sComponent } from './digital-clock1s.component';

describe('DigitalClock1sComponent', () => {
  let component: DigitalClock1sComponent;
  let fixture: ComponentFixture<DigitalClock1sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClock1sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClock1sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
