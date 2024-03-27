import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetProfileComponent } from './asset-profile.component';

describe('AssetProfileComponent', () => {
  let component: AssetProfileComponent;
  let fixture: ComponentFixture<AssetProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetProfileComponent]
    });
    fixture = TestBed.createComponent(AssetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
