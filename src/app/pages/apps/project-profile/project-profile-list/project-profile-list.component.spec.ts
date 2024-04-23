import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProjectProfileListComponent } from './project-profile-list.component';

describe('ProjectProfileListComponent', () => {
  let component: ProjectProfileListComponent;
  let fixture: ComponentFixture<ProjectProfileListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectProfileListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
