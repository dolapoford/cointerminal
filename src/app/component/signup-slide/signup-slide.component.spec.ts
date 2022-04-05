import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSlideComponent } from './signup-slide.component';

describe('SignupSlideComponent', () => {
  let component: SignupSlideComponent;
  let fixture: ComponentFixture<SignupSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
