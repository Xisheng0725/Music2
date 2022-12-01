import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080'

  sendEmail(email) {
    return this.http.post(this.URL + '/users/set-email/'+email, {"email": email});
  }

  getEmail() {
    return this.http.get(this.URL + '/users/get-email').pipe(map(r=>r));
  }

  findEmail(email) {
    return this.http.post(this.URL + '/users/find-email/', {"email": email}).pipe(map(r=>r));
  }

  matchPass(email, pass) {
    return this.http.post(this.URL + '/users/match-credentials/', {"email": email, "password": pass}).pipe(map(r=>r));
  }

  createUser(email, pass) {
    return this.http.post(this.URL + '/users/new-user', {"email": email, "password": pass});
  }
}
