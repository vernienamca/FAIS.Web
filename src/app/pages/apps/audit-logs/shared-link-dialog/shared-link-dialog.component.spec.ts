import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SharedLinkDialogComponent } from './shared-link-dialog.component';

describe('ImportUsersDialogComponent', () => {
  let component: SharedLinkDialogComponent;
  let fixture: ComponentFixture<SharedLinkDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedLinkDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLinkDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
