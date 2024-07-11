import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient)
  baseUrl = "https://localhost:7089/api/";


  login(model: any) {
    return this.http.post(this.baseUrl + 'Auth/SignIn', model, { responseType: 'text' });
  }

}
