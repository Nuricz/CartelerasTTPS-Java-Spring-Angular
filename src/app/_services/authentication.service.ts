import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { HttpResponse } from '@angular/common/http';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http: HttpClient,
        private store:StorageService,) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, clave: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'username':  username,
              'clave':  clave,
              'Content-Type': 'application/json'
            }),
            observe: 'response' as 'response'
          };
        return this.http.post<any>(`${env.url}/autenticacion`,{ observe: 'response' } ,httpOptions)
            .pipe(map(credentials => {
                // login successful si hay un token en la respuesta
                if (credentials.body && credentials.body.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes                    
                    this.store.setCurrentSession(credentials);
                    this.currentUserSubject.next(credentials.body);
                }

                return credentials.body;
            }));
    }

    logout() {
        // elimino las credenciales del localstorage al deslogearme
        this.store.removeCurrentSession();
        this.currentUserSubject.next(null);
    }
}