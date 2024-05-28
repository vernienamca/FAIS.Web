import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetMovementReportListComponent } from './amr-form-100-list.component';

describe('AssetMovementReportListComponent', () => {
  let component: AssetMovementReportListComponent;
  let fixture: ComponentFixture<AssetMovementReportListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetMovementReportListComponent]
    });
    fixture = TestBed.createComponent(AssetMovementReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
