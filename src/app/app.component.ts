import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'simple-app';

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.getStatus().subscribe(isLoggedIn => {
      if (!isLoggedIn)
        this.router.navigate(['/login']);
      else 
        this.router.navigate(['/dashboard/home'])
    })
  }
}
