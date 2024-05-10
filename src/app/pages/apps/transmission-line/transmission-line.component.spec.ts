import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransmissionProfileComponent } from './transmission-line.component';

describe('TransmissionProfileComponent', () => {
  let component: TransmissionProfileComponent;
  let fixture: ComponentFixture<TransmissionProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransmissionProfileComponent]
    });
    fixture = TestBed.createComponent(TransmissionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
