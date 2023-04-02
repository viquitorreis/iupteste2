import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: {email: string, password: string}): Promise<any> {
    return this.http.post(environment.server.concat('/login'), data).toPromise()
  }

}
