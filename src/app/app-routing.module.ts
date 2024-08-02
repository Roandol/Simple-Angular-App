import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ContactPage } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: "",
    component: HomePage
  },
  {
    path: "contact",
    component: ContactPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
