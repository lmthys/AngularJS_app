import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaSequenceComponent } from './alpha-sequence.component';

describe('AlphaSequenceComponent', () => {
  let component: AlphaSequenceComponent;
  let fixture: ComponentFixture<AlphaSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
