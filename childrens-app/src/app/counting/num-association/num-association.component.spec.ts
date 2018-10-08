import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumAssociationComponent } from './num-association.component';

describe('NumAssociationComponent', () => {
  let component: NumAssociationComponent;
  let fixture: ComponentFixture<NumAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
