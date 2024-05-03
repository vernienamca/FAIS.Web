import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewInterpolationDialogComponent } from './view-interpolation-dialog.component';

describe('ViewInterpolationDialogComponent', () => {
  let component: ViewInterpolationDialogComponent;
  let fixture: ComponentFixture<ViewInterpolationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInterpolationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInterpolationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
