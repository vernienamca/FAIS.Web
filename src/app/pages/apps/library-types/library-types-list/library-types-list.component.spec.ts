import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTypesListComponent } from './library-types-list.component';

describe('LibraryTypesListComponent', () => {
  let component: LibraryTypesListComponent;
  let fixture: ComponentFixture<LibraryTypesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryTypesListComponent]
    });
    fixture = TestBed.createComponent(LibraryTypesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
