import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeteringProfileListComponent } from './metering-profile-list.component';

describe('AioTableComponent', () => {
  let component: MeteringProfileListComponent;
  let fixture: ComponentFixture<MeteringProfileListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MeteringProfileListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteringProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
