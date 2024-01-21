import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ForgotPasswordComponent } from './app/pages/auth/forgot-password/forgot-password.component';
import { AuthService } from './core/services/auth.service';
import { AuthApi } from './core/api/auth-api.service';
import { PortalApi } from './core/api/portal-api.service';
import { PortalService } from './core/services/portal.service';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';
import { DatePipe } from '@angular/common';
import { SecurityService } from './core/services/security.service';
import { securityApi } from './core/api/security-api.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { RoleService } from './core/services/role.service';
import { RoleApi } from './core/api/role-api.service';
import { UserApi } from './core/api/user-api.service';


@NgModule({
  declarations: [AppComponent, ForgotPasswordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VexModule,
    CustomLayoutModule,
    NgxMatSelectSearchModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    DatePipe,
    AuthApi, 
    PortalApi, 
    AuthService, 
    PortalService,
    SecurityService,
    securityApi,
    RoleService,
    UserApi,
    RoleApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
