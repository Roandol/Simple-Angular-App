import { Component } from '@angular/core';
import { RouteItem, routes } from '../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  position: "bottom" = "bottom";
  items: RouteItem[];

  constructor() {
    this.items = routes;
  }
}