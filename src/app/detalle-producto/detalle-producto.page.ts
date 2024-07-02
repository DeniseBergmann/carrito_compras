import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CarritoComprasService } from '../servicios/CarritoCompras.service';
import { Producto } from '../interfaces/Producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class DetalleProductoPage {
  private carritoComprasService: CarritoComprasService = inject(CarritoComprasService);
  private activeRoute:ActivatedRoute = inject(ActivatedRoute);
  producto: Producto|undefined;
  cantidad: number = 1;

  constructor(){

    this.activeRoute.params.subscribe(params => {
      this.carritoComprasService.getProducto(params['id_producto']).subscribe(data => {
        this.producto = data.data;
      });
    });

  }

  sumar(){
    this.cantidad++;
  }

  restar(){
    if((this.cantidad - 1) == 0){
      return;
    }
    this.cantidad--;
  }

}
