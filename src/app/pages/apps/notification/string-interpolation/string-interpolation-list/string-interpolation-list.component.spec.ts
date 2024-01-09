import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StringInterpolationListComponent } from './string-interpolation-list.component';

describe('AioTableComponent', () => {
  let component: StringInterpolationListComponent;
  let fixture: ComponentFixture<StringInterpolationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [StringInterpolationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
