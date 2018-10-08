import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumConcentrationComponent } from './num-concentration.component';

describe('NumConcentrationComponent', () => {
  let component: NumConcentrationComponent;
  let fixture: ComponentFixture<NumConcentrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumConcentrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
