import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarteleraObject } from '../core/models/cartelera-object.model';
import { environment as env } from '../../environments/environment';
import { StorageService } from '../core/services/storage.service';



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

  crear(unaCartelera: CarteleraObject): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.storageService.getCurrentToken(),
        'Content-Type': 'application/json'
      })
    };
    const datos = {
                  'nombre': unaCartelera.nombre,
                  'anio': unaCartelera.anio
                };
    const cuerpo = JSON.stringify(datos);
    return this.http.post(`${env.url}/carteleras`,
                        cuerpo, httpOptions
                        );
  }

  borrar(unaCartelera: CarteleraObject): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Token':  this.storageService.getCurrentToken()
      })
    };
    const id = unaCartelera.id;
    return this.http.delete(`${env.url}/cartelera/` + id, httpOptions);
  }
}
