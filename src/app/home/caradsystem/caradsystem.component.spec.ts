import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaradsystemComponent } from './caradsystem.component';

describe('CaradsystemComponent', () => {
  let component: CaradsystemComponent;
  let fixture: ComponentFixture<CaradsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaradsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaradsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
