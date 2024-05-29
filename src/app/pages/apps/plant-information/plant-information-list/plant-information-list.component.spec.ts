import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlantInformationListComponent } from './plant-information-list.component';

describe('PlantInformationListComponent', () => {
  let component: PlantInformationListComponent;
  let fixture: ComponentFixture<PlantInformationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PlantInformationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
