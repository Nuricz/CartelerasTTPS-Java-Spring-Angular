import { Component, OnInit } from '@angular/core';  
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import {AuthenticationService} from "../login/shared/authentication.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: User = null;

  constructor(private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

  public logout(): void{
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
