import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CostCentersListComponent } from './cost-centers-list.component';

describe('AioTableComponent', () => {
  let component: CostCentersListComponent;
  let fixture: ComponentFixture<CostCentersListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CostCentersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCentersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
