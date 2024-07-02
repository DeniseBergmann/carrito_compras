import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
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
  producto: Producto|undefined;
  constructor(){
    this.consultaProducto();
  }

  consultaProducto(){
    this.carritoComprasService.getProducto(1).subscribe(data => {
      this.producto = data.data;
    });
  }
}
