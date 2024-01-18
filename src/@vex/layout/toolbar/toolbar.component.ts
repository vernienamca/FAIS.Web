import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, takeUntil } from 'rxjs/operators';
import { NavigationService } from '../../services/navigation.service';
import { PopoverService } from '../../components/popover/popover.service';
import { Observable, Subject, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DatePipe } from '@angular/common';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';

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

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _layoutService: LayoutService,
    private _configService: ConfigService,
    private _navigationService: NavigationService,
    private _authService: AuthService,
    private _portalService: PortalService,
    private _datePipe: DatePipe,
    private _router: Router
  ) { 
    const userId = parseFloat(localStorage.getItem('user_id'));
    if (!userId) {
      return;
    }
    this._portalService.getUser(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.user = data;
      });
      
    this.currentDate = `${this._datePipe.transform(new Date(), 'fullDate')} ${this._datePipe.transform(new Date(), 'shortTime')}`;
  }

  ngOnInit(): void {
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
    this._router.navigate(['apps/profile/user-profile']);
  }
  logout(): void {
    this._authService.logout();
  }

  changePassword(): void{
    this._authService.changePassword();
  }
}
