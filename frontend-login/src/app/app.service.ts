import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080'

  sendEmail(email) {
    return this.http.post(this.URL + '/users/setEmail/'+email, {"email": email});
  }

  getEmail() {
    return this.http.get(this.URL + '/users/getEmail');
  }

  findEmail(email) {
    return this.http.post(this.URL + '/users/find-email/', {"email": email});
  }

  matchPass(email, pass) {
    return this.http.post(this.URL + '/users/match-credentials/', {"email": email, "password": pass});
  }

  createUser(email, pass) {
    return this.http.post(this.URL + 'users/new-user', {"email": email, "password": pass});
  }
}
