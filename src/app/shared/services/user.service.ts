import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginReponse, User, UserDetailReponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private domainUrl: string = 'https://reqres.in/api';
  constructor(
    private httpClient: HttpClient
  ) { }

  getUserDetail(userId: number): Observable<UserDetailReponse> {
    return this.httpClient.get<UserDetailReponse>(`${this.domainUrl}/users/${userId}`);
  }

  login(email: string, password: string): Observable<LoginReponse> {
    return this.httpClient.post<LoginReponse>(`${this.domainUrl}/login`, {
      email,
      password
    })
  }

}
