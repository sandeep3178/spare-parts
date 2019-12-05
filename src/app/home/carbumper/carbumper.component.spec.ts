import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbumperComponent } from './carbumper.component';

describe('CarbumperComponent', () => {
  let component: CarbumperComponent;
  let fixture: ComponentFixture<CarbumperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbumperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
