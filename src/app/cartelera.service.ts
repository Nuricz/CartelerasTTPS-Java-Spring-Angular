import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarteleraObject } from './login/shared/cartelera-object.model';



@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  

  constructor(private http: HttpClient) { }

  generateHeaders(){
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Token', '1123456');
    return headers;
  }

  getCarteleras(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  '1123456'
      })
    };
    return this.http.get('http://localhost:8080/ttps-spring/carteleras',
                        httpOptions
                        );
  }

  crear(unaCartelera:CarteleraObject): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  '4123456',
        'Content-Type': 'application/json'
      })
    };
    let datos = {
                  "nombre": unaCartelera.nombre,
                  "year": unaCartelera.year
                }
    let cuerpo = JSON.stringify(datos);
    return this.http.post('http://localhost:8080/ttps-spring/carteleras',
                        cuerpo,httpOptions
                        );
  }
  
}
