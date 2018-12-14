/**
 * Created by xavi on 5/16/17.
 */
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../models/session.model";
import {User} from "../models/user.model";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class StorageService {

  private localStorageService;
  private currentSession : User = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(headers:HttpHeaders){
    let nuevoUsuario={
      "nombre":headers.get('nombre'),
      "apellido":headers.get('apellido'),
      "username":headers.get('username'),
      "perfil":headers.get('perfil'),
      "email":headers.get('mail'),
      "token":headers.get('token')
    }       
    this.currentSession = nuevoUsuario;
    this.localStorageService.setItem('currentUser', JSON.stringify(nuevoUsuario));
  }

  loadSessionData(): User{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <User> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): User {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  getCurrentUser(): User {
    return this.getCurrentSession();;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
    //return false;
  };

  getCurrentToken(): string {
    if(this.getCurrentSession() != null)
      return this.getCurrentSession().token;
    else{
      return null
    }  
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/']);
  }

}