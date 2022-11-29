import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'new-account', component: NewAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
