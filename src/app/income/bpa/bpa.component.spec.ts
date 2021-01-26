import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpaComponent } from './bpa.component';

describe('BpaComponent', () => {
  let component: BpaComponent;
  let fixture: ComponentFixture<BpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
