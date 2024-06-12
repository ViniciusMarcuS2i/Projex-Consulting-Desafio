import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { IProducts } from '../../types/products.interface';
import { CommonModule } from '@angular/common';
import {
  CartManagementService,
  CartProduct,
} from '../../services/cart-management.service';

@Component({
  selector: 'app-cartitem',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cartitem.component.html',
  styleUrl: './cartitem.component.scss',
})
export class CartitemComponent {
  faTrash = faTrashCan;

  @Input() product?: CartProduct;

  constructor(private cartManagement: CartManagementService) {}

  handleDecreaseProductQuantityClick = () => {
    if (this.product) {
      this.cartManagement.decreaseProductQuantity(this.product.id);
    }
  };
  handleIncreaseProductQuantityClick = () => {
    if (this.product) {
      this.cartManagement.increaseProductQuantity(this.product.id);
    }
  };

  handleRemoveProductFromCartClick = () => {
    if (this.product) {
      this.cartManagement.removeProductFromCart(this.product.id);
    }
  };
}
