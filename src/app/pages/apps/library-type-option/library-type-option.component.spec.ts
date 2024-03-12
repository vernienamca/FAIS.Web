import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTypeOptionComponent } from './library-type-option.component';

describe('LibraryTypeOptionComponent', () => {
  let component: LibraryTypeOptionComponent;
  let fixture: ComponentFixture<LibraryTypeOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryTypeOptionComponent]
    });
    fixture = TestBed.createComponent(LibraryTypeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
