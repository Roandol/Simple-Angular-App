import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGConfig } from 'primeng/api';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LoginPage } from './pages/login/login.component';
import { LoginModule } from './modules/form/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule
  ],
  providers: [PrimeNGConfig, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primengconfig: PrimeNGConfig){
    primengconfig.ripple = true
  }
 }
