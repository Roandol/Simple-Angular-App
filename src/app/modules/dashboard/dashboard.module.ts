import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { MenuComponent } from "../../components/menu/menu.component";
import { DockModule } from "primeng/dock";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@NgModule({
    declarations: [
        DashboardComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DockModule
    ],
    exports: []
})

export class DashboardModule {

}