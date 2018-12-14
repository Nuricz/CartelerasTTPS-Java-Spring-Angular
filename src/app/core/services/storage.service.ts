/**
 * Created by xavi on 5/16/17.
 */
import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import {Session} from "../models/session.model";
import {User} from "../models/user.model";

@Injectable()
export class StorageService {

  private localStorageService;
  private currentSession : User = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentSession(user: User){
    this.currentSession = user;
    this.localStorageService.setItem('currentUser', JSON.stringify(user));
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
  };

  getCurrentToken(): User {
    return this.getCurrentSession();
  };

  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}
