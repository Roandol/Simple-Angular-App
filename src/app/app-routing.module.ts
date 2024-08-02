import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';
import { MenuItem, PrimeIcons } from 'primeng/api';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
