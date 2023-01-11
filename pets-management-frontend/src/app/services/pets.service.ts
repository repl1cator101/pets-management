import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../domain/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  readonly _url = "http://localhost:8080/api/pets"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this._url)
  }

  getById(id: String) : Observable<Pet> {
    return this.http.get<Pet>(`${this._url}/${id}`);
  }
  
  add(pet: Pet) : Observable<Pet> {
    let httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json',})}
    return this.http.post<Pet>(this._url, pet);
  }

  update(pet: Pet) : Observable<Pet> {
    let httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json',})}
    return this.http.put<Pet>(this._url, pet, httpOptions);
  }

}
