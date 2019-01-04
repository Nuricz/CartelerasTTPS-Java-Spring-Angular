import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StorageService} from "../core/services/storage.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarteleraObject } from '../login/shared/cartelera-object.model';
import { environment as env } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  

  constructor(private http: HttpClient,
              private storageService: StorageService) { }

  getCarteleras(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.storageService.getCurrentToken()
      })
    };
    return this.http.get(`${env.url}/carteleras`,
                        httpOptions
                        );
  }

  crear(unaCartelera:CarteleraObject): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.storageService.getCurrentToken(),
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
