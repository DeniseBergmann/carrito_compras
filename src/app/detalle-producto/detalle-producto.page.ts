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
export class DetalleProductoPage implements OnInit {
  private carritoComprasService = inject(CarritoComprasService);
  producto: Producto [] = [];

  ngOnInit(): void {
    this.consultarProducto();
  }

  consultarProducto() {
    this.carritoComprasService.getProducto(1).subscribe(data => {
      this.producto = data.data;
    });
  }
}
