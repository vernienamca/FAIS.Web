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
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
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
            path: 'user-edit',
            loadChildren: () => import('./pages/apps/User-Edit/User-Edit.module').then(m => m.UserEditModule),
          },

          {
            path: 'user-add',
            loadChildren: () => import('./pages/apps/user/user-add/User-add.module').then(m => m.UserAddModule),
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
            path: 'editor',
            loadChildren: () => import('./pages/apps/editor/editor.module').then(m => m.EditorModule),
          },
          {
            path: 'profile',
            children: [
              {
                path: 'change-password',
                loadChildren: () => import('./pages/pages/auth/change-password/change-password.module').then(m => m.ChangePasswordModule),
              },
              {
                path: 'user-profile',
                loadChildren: () => import('./pages/apps/user/profile/profile.module.').then(m => m.ProfileModule),
              },
           
            ]
          },
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
          }
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
