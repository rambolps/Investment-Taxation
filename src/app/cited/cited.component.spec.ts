import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitedComponent } from './cited.component';

describe('CitedComponent', () => {
  let component: CitedComponent;
  let fixture: ComponentFixture<CitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
