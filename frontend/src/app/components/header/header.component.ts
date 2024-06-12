import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartManagementService } from '../../services/cart-management.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isVisible: boolean = false;

  constructor(private cartManagement: CartManagementService) {}

  ngOnInit() {
    this.cartManagement.cartIsOpen$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }

  toggleVisibility() {
    this.cartManagement.setCartIsOpen(!this.isVisible);
  }

  shoppingcart = faShoppingCart;
}
