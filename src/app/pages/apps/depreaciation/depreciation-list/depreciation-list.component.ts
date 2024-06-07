import { Component } from '@angular/core';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngxs/store';
import { DepreciationState } from 'src/app/shared/store/depreciation/depreciation.state';
import { Subject, map, takeUntil } from 'rxjs';
import { GetFieldDictionaries } from 'src/app/shared/store/depreciation/depreciation.action';

@UntilDestroy()
@Component({
  selector: 'app-depreciation-list',
  templateUrl: './depreciation-list.component.html',
  styleUrls: ['./depreciation-list.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class DepreciationListComponent {
  private _onDestroy$ = new Subject<void>();
  
  constructor(private _store: Store) {
    this._store.dispatch(new GetFieldDictionaries())
      .pipe(
        map(() => this._store.selectSnapshot(DepreciationState.getFieldDictionaries)),
        takeUntil(this._onDestroy$)
      ).subscribe(dictionaries => {
        console.log(dictionaries);
      });
  }
}