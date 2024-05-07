import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransmissionConfirmationDialogComponent } from './transmission-confirmation-dialog.component';

describe('TransmissionConfirmationDialogComponent', () => {
  let component: TransmissionConfirmationDialogComponent;
  let fixture: ComponentFixture<TransmissionConfirmationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmissionConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
