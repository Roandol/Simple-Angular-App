import { Component } from '@angular/core';
import { RouteItem } from '../../app-routing.module';
import { childRoutes } from '../../modules/dashboard/dashboard-routing.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  position: "bottom" = "bottom";
  items: RouteItem[];

  constructor(private authService: AuthService, private router: Router) {
    this.items = [...childRoutes, {
      command: () => {
        authService.logout();
        router.navigate(['/login']);
        
      },
      icon: PrimeIcons.POWER_OFF
    }];
  }
}