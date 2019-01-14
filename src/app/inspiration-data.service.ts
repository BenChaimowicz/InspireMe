import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inspiration } from './inspiration';

@Injectable({
  providedIn: 'root'
})
export class InspirationDataService {

  private baseURL: string;

  inspirationList: Inspiration[] = [
    new Inspiration(0, 'Polk', 'Anoni', 'If you die, you stop living.'),
    new Inspiration(1, 'Asmodeus', 'Littlepig', 'Fuck you'),
    new Inspiration(2, 'Gollum', 'Skankhunt42', 'Cheesecake')
  ];

  constructor(private http: HttpClient) {

  }

  getInspirations(): Observable<Inspiration[]> {
    return this.http.get<Inspiration[]>(this.baseURL);
  }
}
