import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProFormaEntryComponent } from './pro-forma-entry.component';

describe('ProFormaEntryComponent', () => {
  let component: ProFormaEntryComponent;
  let fixture: ComponentFixture<ProFormaEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProFormaEntryComponent]
    });
    fixture = TestBed.createComponent(ProFormaEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
