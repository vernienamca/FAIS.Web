import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AmrReportDialogComponent} from './amr-report-dialog.component'

describe('AmrReportDialogComponent', () => {
  let component: AmrReportDialogComponent;
  let fixture: ComponentFixture<AmrReportDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmrReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmrReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
