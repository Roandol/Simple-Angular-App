import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginPage } from './pages/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePage } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';

export type RouteItem = MenuItem & Route;

export const routes: Route[] = [
  {
    path: "login",
    component: LoginPage,
    title: "Login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
