import { Component, OnInit } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { GetProductsService } from '../../services/get-products.service';
import { IProducts } from '../../types/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [ProductitemComponent, CommonModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent implements OnInit {
  products: IProducts[] = [];

  constructor(private getProducts: GetProductsService) {}

  ngOnInit() {
    this.getProducts.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
