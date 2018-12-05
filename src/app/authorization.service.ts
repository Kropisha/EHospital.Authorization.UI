import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private headers: HttpHeaders;
  private accessPointUrl: 'https://localhost:44355/api/Authorization';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
   }

   public login(userLogin, password) {
     return this.http.post('https://localhost:44355/api/Authorization/login', {userLogin, password});
   }

   public logout(id) {
    return this.http.post(this.accessPointUrl + '/' + id, {headers: this.headers});
  }
}
