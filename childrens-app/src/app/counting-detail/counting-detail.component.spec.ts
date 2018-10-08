import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingDetailComponent } from './counting-detail.component';

describe('CountingDetailComponent', () => {
  let component: CountingDetailComponent;
  let fixture: ComponentFixture<CountingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
