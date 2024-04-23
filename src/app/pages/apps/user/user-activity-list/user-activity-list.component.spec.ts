import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserActivityListComponent } from './user-activity-list.component';

describe('UserActivityListComponent', () => {
  let component: UserActivityListComponent;
  let fixture: ComponentFixture<UserActivityListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserActivityListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
