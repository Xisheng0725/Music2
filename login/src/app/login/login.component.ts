import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
  }
}
