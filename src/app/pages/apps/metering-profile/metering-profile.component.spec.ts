import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteringProfileComponent } from './metering-profile.component';

describe('MeteringProfileComponent', () => {
  let component: MeteringProfileComponent;
  let fixture: ComponentFixture<MeteringProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeteringProfileComponent]
    });
    fixture = TestBed.createComponent(MeteringProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
