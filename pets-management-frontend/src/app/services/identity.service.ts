import { Injectable } from '@angular/core';
import { IdentityModel } from '../domain/IdentityModel';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { JwtResponse } from '../domain/JwtResponse';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  readonly _url = "http://localhost:8080/api/auth/login"
  constructor(private http: HttpClient) { }

  login(identityModel: IdentityModel) : Observable<JwtResponse>{
    let httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json',})}
    return this.http.post<JwtResponse>(this._url, identityModel, httpOptions)
  }
}
