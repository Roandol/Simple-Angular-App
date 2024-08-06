import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { LoginPage } from './pages/login/login.component';

export type RouteItem = MenuItem & Route;

export const routes: RouteItem[] = [
  {
    path: "",
    component: HomePage,
    title: "Home",
    icon: PrimeIcons.HOME
  },
  {
    path: "contact",
    component: ContactPage,
    title: "Contact",
    icon: PrimeIcons.PHONE
  },
  {
    path: "login",
    component: LoginPage,
    title: "Login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, routes]
})
export class AppRoutingModule { }
