import { Component, OnInit } from '@angular/core';
import { CarteleraService } from '../cartelera.service';

@Component({
  selector: 'app-listado-carteleras',
  templateUrl: './listado-carteleras.component.html',
  styleUrls: ['./listado-carteleras.component.css']
})
export class ListadoCartelerasComponent implements OnInit {
  carteleras:string;
  constructor(private service: CarteleraService) {
    this.service.getCarteleras().subscribe(
      data => {
        this.carteleras = data;
        console.log(data);
      }
    );
   }

  ngOnInit() {
  }

}
