export class CarteleraObject {

    public nombre: string;
    public year: string;
  
    constructor( object: any){
      this.nombre = (object.nombre) ? object.nombre : null;
      this.year = (object.year) ? object.year : null;
    }
}        