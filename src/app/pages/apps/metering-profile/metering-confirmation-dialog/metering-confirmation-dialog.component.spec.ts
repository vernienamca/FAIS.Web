import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MeteringConfirmationDialogComponent } from './metering-confirmation-dialog.component';

describe('MeteringConfirmationDialogComponent', () => {
  let component: MeteringConfirmationDialogComponent;
  let fixture: ComponentFixture<MeteringConfirmationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeteringConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteringConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
