import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from 'src/app/new-account/new-account.component';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login.component';


const routes: Routes = [
  {path: 'new-account', component: NewAccountComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
