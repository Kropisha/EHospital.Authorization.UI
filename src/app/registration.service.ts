import { User } from './login/models/user';
import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private headers: HttpHeaders;
  private accessPointUrl: 'https://localhost:44355/api/Registration';

  @Input() user: User;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public register( user, password) {
    return this.http.post(this.accessPointUrl, [user, password], {headers: this.headers});
}
}
