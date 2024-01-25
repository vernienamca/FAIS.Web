import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationAddComponent } from './string-interpolation-add.component';

describe('UserAddComponent', () => {
  let component: StringInterpolationAddComponent;
  let fixture: ComponentFixture<StringInterpolationAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringInterpolationAddComponent]
    });
    fixture = TestBed.createComponent(StringInterpolationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
