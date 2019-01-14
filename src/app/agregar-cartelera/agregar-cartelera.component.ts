import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {Router} from "@angular/router";
import { CarteleraService } from "../_services/cartelera.service";
import { CarteleraObject } from '../core/models/cartelera-object.model';

@Component({
  selector: 'app-agregar-cartelera',
  templateUrl: './agregar-cartelera.component.html',
  styleUrls: ['./agregar-cartelera.component.scss']
})
export class AgregarCarteleraComponent implements OnInit {

  public carteleraForm: FormGroup;
  public error: {code: number, message: string} = null;
  public submitted: Boolean = false;
  public cartelera:string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private carteleraService: CarteleraService) { }

  ngOnInit() {
    this.carteleraForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      anio: ['', ],
    });
  }

  public submitCartelera(): void {
    this.submitted = true;
    this.error = null;
    if(this.carteleraForm.valid){
      this.carteleraService.crear(new CarteleraObject(this.carteleraForm.value)).subscribe(
        (res: HttpResponse<any>) => {         
          this.router.navigate(['/carteleras']);
        },
        (error: HttpErrorResponse) => {
          window.alert('El nombre de cartelera ya está utilizado')
        }
      )
    }
  }

}
