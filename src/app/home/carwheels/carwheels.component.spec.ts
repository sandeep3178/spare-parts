import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwheelsComponent } from './carwheels.component';

describe('CarwheelsComponent', () => {
  let component: CarwheelsComponent;
  let fixture: ComponentFixture<CarwheelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarwheelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarwheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
