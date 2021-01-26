import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfsaComponent } from './tfsa.component';

describe('TfsaComponent', () => {
  let component: TfsaComponent;
  let fixture: ComponentFixture<TfsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
