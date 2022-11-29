import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewAccountComponent } from './new-account/new-account.component';
//import { AngularFireModule } from "@angular/fire";
//import { AngularFirestoreModule } from "@angular/fire/firestore";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
