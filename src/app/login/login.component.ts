/**
 * Created by xavi on 5/16/17.
 */
import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {LoginObject} from './login-object.model';
import {AuthenticationService} from '../_services/authentication.service';
import {StorageService} from '../core/services/storage.service';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../core/models/user.model';
import { first } from 'rxjs/operators';
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { parseSelectorToR3Selector } from "@angular/compiler/src/core";
@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: string;
  public user: User;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public submitLogin(): void {
    this.submitted = true;

    if (this.loginForm.valid){
      const form = new LoginObject(this.loginForm.value);

      this.authenticationService.login(form.username,form.password).subscribe(
        (res: HttpResponse<any>) => {
              this.router.navigate([this.returnUrl]);
        },
        (_error: HttpErrorResponse) => {
          this.error = 'Nombre de usuario o Contraseña incorrectas';
        }
      )
    }
  }  
}
