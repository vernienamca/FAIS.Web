import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AssetProfileListComponent } from './asset-profile-list.component';

describe('AssetProfileListComponent', () => {
  let component: AssetProfileListComponent;
  let fixture: ComponentFixture<AssetProfileListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AssetProfileListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
