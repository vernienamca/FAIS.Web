import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidKeyComponent } from './invalid-link.component';

describe('InvalidKeyComponent', () => {
  let component: InvalidKeyComponent;
  let fixture: ComponentFixture<InvalidKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidKeyComponent]
    });
    fixture = TestBed.createComponent(InvalidKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
