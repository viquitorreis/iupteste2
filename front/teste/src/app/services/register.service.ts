import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: any) {
    return this.http.post(environment.server.concat('/register'), data, {responseType: 'text'}).toPromise()
  }

}
