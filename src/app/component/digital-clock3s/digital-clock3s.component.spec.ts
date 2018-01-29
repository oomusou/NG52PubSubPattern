import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalClock3sComponent } from './digital-clock3s.component';

describe('DigitalClock3sComponent', () => {
  let component: DigitalClock3sComponent;
  let fixture: ComponentFixture<DigitalClock3sComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalClock3sComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClock3sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
