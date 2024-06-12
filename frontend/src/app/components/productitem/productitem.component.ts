import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { IProducts } from '../../types/products.interface';
import {
  CartManagementService,
  CartProduct,
} from '../../services/cart-management.service';

@Component({
  selector: 'app-productitem',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.scss',
})
export class ProductitemComponent {
  @Input() product!: IProducts;
  quantity: number = 1;
  isVisible?: boolean;

  constructor(private cartManagement: CartManagementService) {}

  addToCart(product: CartProduct) {
    this.cartManagement.addProductToCart({
      ...product,
      quantity: this.quantity,
    });
  }

  addToCartWithQuantity(product: IProducts) {
    const productWithQuantity = { ...product, quantity: 1 };
    this.addToCart(productWithQuantity);
    this.cartManagement.setCartIsOpen(!this.isVisible);
  }

  bagshopping = faBagShopping;
}
