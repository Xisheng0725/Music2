import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountPageComponent } from './account-page/account-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'new-account', component: NewAccountComponent},
  {path: 'view-account', component: AccountPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
