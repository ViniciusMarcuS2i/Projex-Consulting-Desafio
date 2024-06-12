import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { CartitemComponent } from '../cartitem/cartitem.component';
import {
  CartManagementService,
  CartProduct,
} from '../../services/cart-management.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CartitemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  isVisible: boolean = false;
  products: CartProduct[] = [];
  total: string = '0';
  faX = faX;

  constructor(private cartService: CartManagementService) {}

  ngOnInit() {
    this.cartService.cartIsOpen$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
    this.cartService.products$.subscribe((products) => {
      this.products = products;
      let total = this.cartService.getTotal();
      this.total = total.toFixed(2);
    });
  }

  toggleVisibility() {
    this.cartService.setCartIsOpen(!this.isVisible);
  }
}
