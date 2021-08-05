import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostListReponse } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private domainUrl: string = 'https://reqres.in/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getListPost(): Observable<PostListReponse> {
    return this.httpClient.get<PostListReponse>(`${this.domainUrl}/unknown`);
  }

}
