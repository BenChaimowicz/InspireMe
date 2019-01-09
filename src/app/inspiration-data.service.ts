import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inspiration } from './inspiration';

@Injectable({
  providedIn: 'root'
})
export class InspirationDataService {

  inspirationList: Inspiration[] = [];

  constructor(private http: HttpClient) { }
}
