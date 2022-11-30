import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  constructor(private appService: AppService) { }

  email;
  password = 'placeholder';
  censoredPassword;
  passwordShown=false;

  //pipe(takeUntil(this.destroy$)).

  ngOnInit() {
    this.appService.getEmail().subscribe((email)=>{
      console.log(email);
      this.email=email;
    });
    this.censorPassword();    
    document.getElementById('email').innerHTML = this.email+"<br>";
    document.getElementById('password').innerHTML = this.censoredPassword+"<br>";

    document.getElementById('display-user').innerHTML = this.email;
  }

  showHidePass() {
    if (this.passwordShown) {
        document.getElementById('showHidePass').innerHTML="Show Password";
        document.getElementById('password').innerHTML=this.censoredPassword+"<br>";
    } else {
        document.getElementById('showHidePass').innerHTML="Hide Password";
        document.getElementById('password').innerHTML=this.password+"<br>";
    }
    this.passwordShown=!this.passwordShown;
  }

  censorPassword() {
    this.censoredPassword=this.password.charAt(0);
    for (let i=1; i<this.password.length; ++i) {
        this.censoredPassword+="*";
    }
  }
}
