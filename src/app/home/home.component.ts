/**
 * Created by xavi on 5/16/17.
 */
import {Component, OnInit} from '@angular/core';
import {StorageService} from '../core/services/storage.service';
import {User} from '../core/models/user.model';
import {AuthenticationService} from '../_services/authentication.service';
import {Router} from '@angular/router';
import { CarteleraObject } from '../core/models/cartelera-object.model';
import { CarteleraService } from '../_services';


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  public user: User;
  carteleras: CarteleraObject[] = [];
  error: String;
  loading: Boolean = false;

  constructor(
    private storageService: StorageService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private carteleraService: CarteleraService
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    this.loading = true;
    this.carteleraService.getCarteleras()
        .subscribe(
            data => {
                this.loading = false;
                this.carteleras = data;
            },
            error => {
                this.error = 'No se pudieron cargar las carteleras';
                this.loading = false;
                console.error(error);
            }
        );
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
