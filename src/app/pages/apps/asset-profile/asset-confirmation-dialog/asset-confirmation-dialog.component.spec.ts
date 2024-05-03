import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AssetConfirmationDialogComponent } from './asset-confirmation-dialog.component';

describe('AssetConfirmationDialogComponent', () => {
  let component: AssetConfirmationDialogComponent;
  let fixture: ComponentFixture<AssetConfirmationDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
