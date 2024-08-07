import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from '../../components/login/login.component';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    MessagesModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
