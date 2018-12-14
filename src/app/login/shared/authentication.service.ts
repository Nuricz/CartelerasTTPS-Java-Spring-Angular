import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LoginObject} from "./login-object.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {StorageService} from "../../core/services/storage.service";
import {Router} from "@angular/router";
/**
 * Created by xavi on 5/16/17.
 */
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
              private store:StorageService,
              private router: Router) {}

  private basePath = 'http://localhost:8080/ttps-spring/autenticacion';

  login(loginObj: LoginObject): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'usuario':  loginObj.username,
        'clave':  loginObj.password,
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'response'
    };
    return this.http.post<any>(this.basePath, { observe: 'response' },httpOptions);
  }

  logout() {
    this.store.removeCurrentSession();
  }
}
