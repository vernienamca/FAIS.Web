import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { StringInterpolationConfirmationDialogComponent } from './string-interpolation-confirmation-dialog.component';

describe('StringInterpolationConfirmationDialogComponent', () => {
  let component: StringInterpolationConfirmationDialogComponent;
  let fixture: ComponentFixture<StringInterpolationConfirmationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StringInterpolationConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
