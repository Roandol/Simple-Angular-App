import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messages: Message[];
  loading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.messages = []
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        {
          next: success => {
            if (success) {
              this.router.navigate(['/dashboard/home']);
            } else {
              this.messages = [{
                severity: "error", detail: "Usuário ou Senha incorretos."
              }]
            }
            this.loading = false;
          },
          error: error => {
            console.log(error);
          }
        }
      )
    } else {
      console.log("Formulário inválido");
    }
  }
}
