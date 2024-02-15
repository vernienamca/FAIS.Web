import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProFormaEntriesListComponent } from './pro-forma-entries-list.component';

describe('ProFormaEntriesListComponent', () => {
  let component: ProFormaEntriesListComponent;
  let fixture: ComponentFixture<ProFormaEntriesListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProFormaEntriesListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProFormaEntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
