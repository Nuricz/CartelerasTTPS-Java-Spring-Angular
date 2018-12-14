import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthorizatedGuard} from "./core/guards/authorizated.guard";
import { ListadoCartelerasComponent } from './listado-carteleras/listado-carteleras.component';
import { AgregarCarteleraComponent } from './agregar-cartelera/agregar-cartelera.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'carteleras', component: ListadoCartelerasComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ]},
  { path: 'agregar-cartelera', component: AgregarCarteleraComponent, pathMatch: 'full', canActivate: [ AuthorizatedGuard ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home'}
];

export const Routing = RouterModule.forRoot(appRoutes);
