import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
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

  async onSubmit() {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    if (email.length === 0 || password.length === 0) {
      alert("Fields cannot be empty. Please try again.");
      return;
    }

    this.appService.sendEmail(email);

    //call firebase
    let findEmail$ = this.appService.findEmail(email);
    let emailTaken = await lastValueFrom(findEmail$);

    if (emailTaken) {
      let match$ = this.appService.matchPass(email, password);
      let match = await lastValueFrom(match$);

      if (match) {
          window.location.href = 'http://react-370204.ue.r.appspot.com';
          return;
      } else {
          alert("The credentials entered did not match any records. Please try again.");
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
