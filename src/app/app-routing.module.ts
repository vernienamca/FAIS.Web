import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { VexRoutes } from '../@vex/interfaces/vex-route.interface';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: 'reset-password/:tempKey',
    loadChildren: () => import('./pages/pages/auth/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
  },
  {
    path: 'invalid-link',
    loadChildren: () => import('./pages/pages/auth/invalid-key/invalid-link.module').then(m => m.InvalidLinkModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./pages/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
  },
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'dashboards/analytics',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('./pages/dashboards/dashboard-analytics/dashboard-analytics.module').then(m => m.DashboardAnalyticsModule),
      },
      {
        path: 'apps',
        children: [
          {
            path: 'help-center',
            loadChildren: () => import('./pages/apps/help-center/help-center.module').then(m => m.HelpCenterModule),
          },
          {
            path: 'modules',
            loadChildren: () => import('./pages/apps/module/module.module').then(m => m.ModuleModule),
          },
          {
            path: 'roles',
            loadChildren: () => import('./pages/apps/role/role.module').then(m => m.RoleModule),
          },
          {
            path: 'users',
            loadChildren: () => import('./pages/apps/user/user.module').then(m => m.UserModule),
          },
          {
            path: 'audit-logs',
            loadChildren: () => import('./pages/apps/audit-logs/audit-logs.module').then(m => m.AuditLogsModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('./pages/apps/system-settings/system-settings.module').then(m =>m.SystemSettingsModule),
            data: {
              toolbarShadowEnabled: true,
              scrollDisabled: false
            }
          },
          {
            path: 'chart-accounts',
            loadChildren: () => import('./pages/apps/chart/chart-account.module').then(m => m.ChartAccountModule),
          },
          {
            path: 'interpolations',
            loadChildren: () => import('./pages/apps/notification/string-interpolation/string-interpolation.module').then(m =>m.StringInterpolationModule)
          },
          {
            path: 'templates',
            loadChildren: () => import('./pages/apps/notification/templates/template.module').then(m =>m.TemplateModule)
          },
          {
            path: 'editor',
            loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
          },
          {
            path: 'my-profile',
            children: [
              {
                path: '',
                loadChildren: () => import('./pages/apps/user/user.module').then(m => m.UserModule),
              },
              {
                path: 'change-password',
                loadChildren: () => import('./pages/pages/auth/change-password/change-password.module').then(m => m.ChangePasswordModule),
              }
            ]
          },
          {
            path: 'cost-centers',
            loadChildren: () => import('./pages/apps/cost-centers/cost-centers.module').then(m => m.CostCentersModule)
          },
          {
            path: 'pro-forma-entries',
            loadChildren: () => import('./pages/apps/pro-forma-entries/pro-forma-entries.module').then(m => m.ProFormaEntriesModule)
          },
          {
            path: 'library-options',
            loadChildren: () => import('./pages/apps/library-type-option/library-type-option.module').then(m => m.LibraryTypeOptionModule)
          },
          {
            path: 'asset-profile',
            loadChildren: () => import('./pages/apps/asset-profile/asset-profile.module').then(m => m.AssetProfileModule)
          },
          {
            path: 'library-types',
            loadChildren: () => import('./pages/apps/library-types/library-types.module').then(m => m.LibraryTypesModule)
          },
          {
            path: 'project-profile',
            loadChildren: () => import('./pages/apps/project-profile/project-profile.module').then(m => m.ProjectProfileModule)
          }
        ]
      },
      {
        path: 'pages',
        children: [
          {
            path: 'error-404',
            loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
          },
          {
            path: 'error-500',
            loadChildren: () => import('./pages/pages/errors/error-500/error-500.module').then(m => m.Error500Module)
          },
          {
            path: 'error-401',
            loadChildren: () => import('./pages/pages/errors/error-401/error-401.module').then(m => m.Error401Module)
          },
        ]
      },
      {
        path: 'ui',
        children: [
          {
            path: 'components',
            loadChildren: () => import('./pages/ui/components/components.module').then(m => m.ComponentsModule),
          },
          {
            path: 'forms/form-elements',
            loadChildren: () => import('./pages/ui/forms/form-elements/form-elements.module').then(m => m.FormElementsModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'forms/form-wizard',
            loadChildren: () => import('./pages/ui/forms/form-wizard/form-wizard.module').then(m => m.FormWizardModule),
            data: {
              containerEnabled: true
            }
          },
          {
            path: 'icons',
            loadChildren: () => import('./pages/ui/icons/icons.module').then(m => m.IconsModule)
          },
          {
            path: 'page-layouts',
            loadChildren: () => import('./pages/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule),
          },
        ]
      },
      {
        path: '**',
        loadChildren: () => import('./pages/pages/errors/error-404/error-404.module').then(m => m.Error404Module)
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: QuicklinkStrategy,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
