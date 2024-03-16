import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionLineComponent } from './transmission-line.component';

describe('ModuleComponent', () => {
  let component: TransmissionLineComponent;
  let fixture: ComponentFixture<TransmissionLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransmissionLineComponent]
    });
    fixture = TestBed.createComponent(TransmissionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
