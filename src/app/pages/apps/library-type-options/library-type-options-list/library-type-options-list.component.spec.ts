import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryTypeOptionListComponent } from './library-type-options-list.component';

describe('ProFormaEntriesListComponent', () => {
  let component: LibraryTypeOptionListComponent;
  let fixture: ComponentFixture<LibraryTypeOptionListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryTypeOptionListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTypeOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
