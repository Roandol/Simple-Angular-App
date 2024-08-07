import { Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users = [
    {
      name: 'Roan',
      password: '1234'
    },
    {
      name: 'Victor',
      password: '1234'
    }
  ]

  login(user: string, password: string): Observable<boolean> {
    return of(user).pipe(
      delay(2000),
      map((userName) => {
        const validUser = this.users.find(u => u.name === userName && u.password === password);
        if (validUser) {
          this.storeStatus("on");
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false))
    )
  }

  getStatus(): Observable<boolean> {
    const status = localStorage.getItem("logged");

    return of(status === "on");
  }

  private storeStatus(inf: string) {
    localStorage.setItem("logged", inf);
  }

  logout() {
    localStorage.setItem("logged", "off");
  }
}
