import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteneComponent } from './componentene.component';

describe('ComponenteneComponent', () => {
  let component: ComponenteneComponent;
  let fixture: ComponentFixture<ComponenteneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
