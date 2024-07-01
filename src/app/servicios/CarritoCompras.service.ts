import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Respuesta } from '../interfaces/Respuesta';
import { Producto } from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  urlBase = "https://epico.gob.ec/vehiculo/public/api/";

  private httpClient: HttpClient = inject(HttpClient);

  todosProductos(){
    return this.httpClient.get<RespuestaProductos>(this.urlBase+ 'producto/all/');
  }

  getProducto(id:number){
    return this.httpClient.get<RespuestaProducto>(this.urlBase+ 'producto/'+id);
  }

}

export interface RespuestaProductos extends Respuesta{
  data: Producto[];
}

export interface RespuestaProducto extends Respuesta{
  data: Producto[];
}
