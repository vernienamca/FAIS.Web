import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { Observable, Subject, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DatePipe } from '@angular/common';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';
import { DropdownValueModel } from 'src/app/core/models/library-type-option';

@Component({
  selector: 'vex-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy  {
  @Input() mobileQuery: boolean;
  @Input() @HostBinding('class.shadow-b')
  hasShadow: boolean;
  navigationItems = this._navigationService.items;
  isHorizontalLayout$: Observable<boolean> = this._configService.config$.pipe(map(config => config.layout === 'horizontal'));
  isVerticalLayout$: Observable<boolean> = this._configService.config$.pipe(map(config => config.layout === 'vertical'));
  isNavbarInToolbar$: Observable<boolean> = this._configService.config$.pipe(map(config => config.navbar.position === 'in-toolbar'));
  isNavbarBelowToolbar$: Observable<boolean> = this._configService.config$.pipe(map(config => config.navbar.position === 'below-toolbar'));
  userVisible$: Observable<boolean> = this._configService.config$.pipe(map(config => config.toolbar.user.visible));
  megaMenuOpen$: Observable<boolean> = of(false);
  user: any;
  currentDate: string;
  positions: DropdownValueModel[] = [];
  positionDescription: string;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _router: Router,
    private _layoutService: LayoutService,
    private _configService: ConfigService,
    private _navigationService: NavigationService,
    private _authService: AuthService,
    private _portalService: PortalService,
    private _datePipe: DatePipe
  ) { 
    this._portalService.getDropdownValues(['POS'])
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.positions = data;
      });
  }

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('user_id'));
    if (!userId) {
      return;
    }
    this._portalService.getUser(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.positionDescription = this.positions.find(t => t.parentId === data.position)?.parentValue ?? ''
        this.currentDate = `${this._datePipe.transform(new Date(), 'fullDate')} ${this._datePipe.transform(new Date(), 'shortTime')}`;
        this.user = data;
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  openQuickpanel(): void {
    this._layoutService.openQuickpanel();
  }

  openSidenav(): void {
    this._layoutService.openSidenav();
  }

  openSearch(): void {
    this._layoutService.openSearch();
  }

  showProfile(): void {
    this._router.navigate(['apps/users/my-profile']);
  }

  changePassword(): void{
    this._router.navigate(['/apps/my-profile/change-password']);
  }

  logout(): void {
    this._authService.logout();
  }
}
