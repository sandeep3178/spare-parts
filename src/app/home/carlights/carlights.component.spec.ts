import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlightsComponent } from './carlights.component';

describe('CarlightsComponent', () => {
  let component: CarlightsComponent;
  let fixture: ComponentFixture<CarlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
