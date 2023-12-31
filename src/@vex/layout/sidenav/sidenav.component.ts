import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { LayoutService } from '../../services/layout.service';
import { ConfigService } from '../../config/config.service';
import { map, startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NavigationItem, NavigationLink } from '../../interfaces/navigation-item.interface';
import { PopoverService } from '../../components/popover/popover.service';
import { Observable, Subject, of } from 'rxjs';
import { UserMenuComponent } from '../../components/user-menu/user-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { SearchModalComponent } from '../../components/search-modal/search-modal.component';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() collapsed: boolean;

  collapsedOpen$ = this.layoutService.sidenavCollapsedOpen$;
  title$ = this.configService.config$.pipe(map(config => config.sidenav.title));
  imageUrl$ = this.configService.config$.pipe(map(config => config.sidenav.imageUrl));
  showCollapsePin$ = this.configService.config$.pipe(map(config => config.sidenav.showCollapsePin));
  userVisible$ = this.configService.config$.pipe(map(config => config.sidenav.user.visible));
  searchVisible$ = this.configService.config$.pipe(map(config => config.sidenav.search.visible));
  userMenuOpen$: Observable<boolean> = of(false);
  items = this.navigationService.items;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private readonly popoverService: PopoverService,
    private _securityService: SecurityService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    const userId = parseFloat(localStorage.getItem('user_id'));
    if (!userId) {
      return;
    }
    this.getNavigationItems(userId);
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  collapseOpenSidenav() {
    this.layoutService.collapseOpenSidenav();
  }

  collapseCloseSidenav() {
    this.layoutService.collapseCloseSidenav();
  }

  toggleCollapse() {
    this.collapsed ? this.layoutService.expandSidenav() : this.layoutService.collapseSidenav();
  }

  trackByRoute(index: number, item: NavigationLink): string {
    return item.route;
  }

  openProfileMenu(origin: HTMLDivElement): void {
    this.userMenuOpen$ = of(
      this.popoverService.open({
        content: UserMenuComponent,
        origin,
        offsetY: -8,
        width: origin.clientWidth,
        position: [
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom'
          }
        ]
      })
    ).pipe(
      switchMap(popoverRef => popoverRef.afterClosed$.pipe(map(() => false))),
      startWith(true),
    );
  }

  openSearch(): void {
    this.dialog.open(SearchModalComponent, {
      panelClass: 'vex-dialog-glossy',
      width: '100%',
      maxWidth: '600px'
    });
  }

  getNavigationItems(userId: number) {
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let groupNames: string[] = [];
        let childrens: NavigationLink[] = [];
        data.forEach(item => {
          if (!groupNames.includes(item.groupName)) {
            groupNames.push(item.groupName);
          }
          const children: NavigationLink = {
            type: 'link',
            label: item.moduleName,
            route: item.url,
            icon: `mat:${item.icon}`,
            groupName: item.groupName
          };
          childrens.push(children);
        });

        let navigationItems: NavigationItem[] = [];
        groupNames.forEach(groupName => {
          const item: NavigationItem = {
            type: 'subheading',
            label: groupName,
            children: Array.from(childrens.filter(t => t.groupName == groupName))
          };
          navigationItems.push(item);
        });
        this.items = navigationItems;
      });
  }
}
