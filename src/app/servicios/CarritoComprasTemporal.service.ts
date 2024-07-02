import { Injectable } from '@angular/core';
import { CarritoCompras, CarritoItem } from '../interfaces/CarritoCompras';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasTemporalService {

carrito:CarritoCompras = {
  id_cliente: null,
  iva:0,
  subtotal:0,
  total:0,
  items: []
};
constructor() { }

agregarProducto(item: CarritoItem){
  let itemSelect = this.carrito.items.find(item => item.id_producto == item.id_producto);
  if(!itemSelect){
    this.carrito.items.push(item);
  }
  else{
    itemSelect.cantidad = item.cantidad;
    itemSelect.subtotal = item.subtotal;
    itemSelect.iva = item.iva;
    itemSelect.total = item.total;
  }
}

getItemProduct(id_producto:number){
  const item = this.carrito.items.find(item => item.id_producto = id_producto);
  return item;
}
}
