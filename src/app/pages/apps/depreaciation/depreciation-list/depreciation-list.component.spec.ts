import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuditLogsListComponent } from './audit-logs-list.component';

describe('AioTableComponent', () => {
  let component: AuditLogsListComponent;
  let fixture: ComponentFixture<AuditLogsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AuditLogsListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditLogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
