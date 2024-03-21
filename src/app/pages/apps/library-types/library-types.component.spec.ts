import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTypesComponent } from './library-types.component';

describe('LibraryTypesComponent', () => {
  let component: LibraryTypesComponent;
  let fixture: ComponentFixture<LibraryTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryTypesComponent]
    });
    fixture = TestBed.createComponent(LibraryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
