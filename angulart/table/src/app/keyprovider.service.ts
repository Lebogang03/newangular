import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeyproviderService {

  constructor(private http:HttpClient) { }

  getTable()
  {
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
}
