import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoginPage } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

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
