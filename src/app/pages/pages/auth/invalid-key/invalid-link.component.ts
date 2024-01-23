import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-invalid-link',
  templateUrl: './invalid-link.component.html',
  styleUrls: ['./invalid-link.component.scss']

})
export class InvalidLinkComponent implements OnInit {
  form: FormGroup; 

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    
  }

  backToHomePage(): void {
    this._router.navigate(['/login']);
  }
}
