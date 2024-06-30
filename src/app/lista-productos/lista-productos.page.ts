import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoComprasService } from '../servicios/CarritoCompras.service';
import { Producto } from '../interfaces/Producto';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterLink]
})
export class ListaProductosPage implements OnInit {

  private carritoComprasService: CarritoComprasService = inject(CarritoComprasService);
  listaProductos:Producto[] = [];

  ngOnInit(): void {
    this.consultarProductos();
}

  consultarProductos(){
    this.carritoComprasService.todosProductos().subscribe(data => {
      this.listaProductos = data.data;
    });
  }
}
