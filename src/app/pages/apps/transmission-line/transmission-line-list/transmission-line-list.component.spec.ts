import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TransmissionLineListComponent } from './transmission-line-list.component';

describe('TransmissionLineListComponent', () => {
  let component: TransmissionLineListComponent;
  let fixture: ComponentFixture<TransmissionLineListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TransmissionLineListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionLineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
