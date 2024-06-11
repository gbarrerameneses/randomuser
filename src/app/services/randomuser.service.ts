import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RandomuserService {

  constructor(private http: HttpClient) { }

  public get(url: string) { // Get
    return this.http.get(url);
  }
}
