import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RouteItem } from "../../app-routing.module";
import { HomePage } from "../../pages/home/home.component";
import { ContactPage } from "../../pages/contact/contact.component";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";
import { PrimeIcons } from "primeng/api";
import { AuthGuard } from "../../services/auth.guard";

export const childRoutes: RouteItem[] = [{
    path: 'home',
    title: "Home",
    pathMatch: "full",
    component: HomePage,
    icon: PrimeIcons.HOME
},
{
    path: "contact",
    title: "Contact",
    component: ContactPage,
    icon: PrimeIcons.PHONE
}]

const routes: RouteItem[] = [
    {
        path: "dashboard",
        component: DashboardComponent,
        title: "Dashboard",
        children: childRoutes,
        canActivate: [AuthGuard]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule {

}