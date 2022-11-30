import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  accountForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { 
    this.accountForm = this.formBuilder.group({
      email: '',
      password: '',
      password2: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    document.getElementById('invalid-email').style.color="rgba(0, 0, 0, 0)";
    document.getElementById('invalid-password').style.color="rgba(0, 0, 0, 0)";
    document.getElementById('invalid-password2').style.color="rgba(0, 0, 0, 0)";

    const email = this.accountForm.controls['email'].value;
    const password = this.accountForm.controls['password'].value;
    const password2 = this.accountForm.controls['password2'].value;

    if (email.length === 0 || password.length === 0 || password2.length === 0) {
      alert("Fields cannot be empty. Please try again.");
      return;
    }

    if (!this.checkValidEmail(email)) {
      document.getElementById('invalid-email').style.color="red";
    } else if (!this.checkValidPassword(password)) {
        document.getElementById('invalid-password').style.color="red";
        // document.getElementById('password2').value="";
    } else if(!this.checkPasswordsMatch(password, password2)) {
        document.getElementById('invalid-password2').style.color="red";
    }

    //************firebase authentication goes here
    
  }

  guestLogin() {
    this.appService.sendEmail(null);
    location.href='https://pro-aux-369817.ue.r.appspot.com';
  }

  //helper methods
  checkValidEmail(email) {
    if (!email.includes('@')) {
        return false;
    }

    //before the @
    const first=email.substring(0, email.indexOf('@'));

    //validate the section before the @
    if (first.length===0) {
        return false;
    }

    var prevWasSpecial = true;
    for (let i=0; i<first.length; ++i) {
        var cur = first.charAt(i).charCodeAt(0);
        // check if cur is a letter or number (or . - _ in certain valid areas)
        if (!prevWasSpecial) {
            if (!((cur>=48 && cur<=57) || (cur>=97 && cur<=122) || cur==45 || cur==46 || cur==95)) {
                return false;
            }
            if (cur==45 || cur==46 || cur==95) {
                prevWasSpecial;
            }
        } else if (prevWasSpecial || i===first.length-1) {
            if (!((cur>=48 && cur<=57) || (cur>=97 && cur<=122))) {
                return false;
            }
            prevWasSpecial=false;
        }
    }

    //validate the section after the @
    const second = email.substring(email.indexOf('@')+1);
    if (second.indexOf('.')!==second.lastIndexOf('.') || second.indexOf('.')===0 || second.indexOf('.')===second.length-1) {
        return false;
    }
    
    const period=second.indexOf('.');

    for (let i=0; i<second.length; ++i) {
        if (i!==period) {
            var cur = second.charAt(i).charCodeAt(0);
            if (!(cur>=97 && cur<=122)) {
                return false;
            }
        }
    }
    return true;
  }

  checkValidPassword(password) {
    return (password.length>=6 && password.length<=18);
  }

  checkPasswordsMatch(p1, p2) {
      return p1===p2;
  }
}
