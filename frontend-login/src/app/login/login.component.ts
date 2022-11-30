import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { 
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    if (email.length === 0 || password.length === 0) {
      alert("Fields cannot be empty. Please try again.");
      return;
    }

    this.appService.sendEmail(email);

    //call firebase
    var emailTaken;
    this.appService.findEmail(email).subscribe((bool)=>{
      console.log(bool);
      emailTaken=bool;
    });

    if (emailTaken) {
      var match;
      this.appService.matchPass(email, password).subscribe((p)=>{
        console.log(p);
        match=p;
      })

      if (match) {
          window.location.href = 'https://pro-aux-369817.ue.r.appspot.com';
          return;
      } else {
          alert("The credentials entered did not match any records. Please try again.");
          // document.getElementsByClassName("password").value = "";
          return;
      }
    } else {
        alert("That email does not exist. Please try again.");
        return;
    }
  }

  guestLogin() {
    this.appService.sendEmail("null");
    location.href='http://react-370204.ue.r.appspot.com';
  }

}
