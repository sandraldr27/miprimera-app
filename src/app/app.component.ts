import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';
import { NgOptimizedImage } from '@angular/common'; //Herramienta de Angular para optimizar las imágenes

@Injectable({
  //@Injectable es un decorador que aporta metadatos adicionales y se utiliza para indicar que la clase ProductService es un servicio que puede ser inyectado en otras clases

  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'miprimera-app';
  products: Product[] = [];

  changeTitle() {
    this.title = 'changed';
  }

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });
  }
}
