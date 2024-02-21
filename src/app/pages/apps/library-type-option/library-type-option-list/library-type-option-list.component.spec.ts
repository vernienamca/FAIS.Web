import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryTypeOptionListComponent } from './library-type-option-list.component';

describe('LibraryTypeOptionListComponent', () => {
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
