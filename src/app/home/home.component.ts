/**
 * Created by xavi on 5/16/17.
 */
import {Component, OnInit} from "@angular/core";
import {StorageService} from "../core/services/storage.service";
import {User} from "../core/models/user.model";
import {AuthenticationService} from "../login/shared/authentication.service";
import {Router} from "@angular/router";
@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  public user: User;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

  public logout(): void{
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
