import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  position: "bottom" = "bottom";
  items = [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      path: ""
    },
    {
      label: 'Contact',
      icon: PrimeIcons.PHONE,
      path: "contact"
    }
  ];
}
