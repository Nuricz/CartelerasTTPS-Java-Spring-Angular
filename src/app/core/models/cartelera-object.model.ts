export class CarteleraObject {

    public nombre: string;
    public anio: string;
    public id: string;
    constructor( object: any){
      this.nombre = (object.nombre) ? object.nombre : null;
      this.anio = (object.anio) ? object.anio : null;
      this.id = (object.id) ? object.id : null;
    }
}
