/**
 * Created by xavi on 5/16/17.
 */
import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {LoginObject} from "./shared/login-object.model";
import {AuthenticationService} from "./shared/authentication.service";
import {StorageService} from "../core/services/storage.service";
import {Router} from "@angular/router";
import {User} from "../core/models/user.model";
import { HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;
  public user:User;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private storageService: StorageService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.user = this.storageService.getCurrentUser();
  }

  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    
    if(this.loginForm.valid){
      
      this.authenticationService.login(new LoginObject(this.loginForm.value)).subscribe(
        (res: HttpResponse<any>) => {
          
          this.correctLogin(res.headers)
        },
        (error: HttpErrorResponse) => {
          window.alert('Los datos ingresados están rancios.. como Pablo')
        }
      )
    }
  }

  private correctLogin(headers:HttpHeaders){
    this.storageService.setCurrentSession(headers);
    this.router.navigate(['/home']);
  }
}