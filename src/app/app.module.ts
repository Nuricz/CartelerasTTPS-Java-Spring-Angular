import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "./core/core.module";
import {Routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import { ListadoCartelerasComponent } from './listado-carteleras/listado-carteleras.component';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import {environment} from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AgregarCarteleraComponent } from './agregar-cartelera/agregar-cartelera.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListadoCartelerasComponent,
    HomeComponent,
    AgregarCarteleraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
