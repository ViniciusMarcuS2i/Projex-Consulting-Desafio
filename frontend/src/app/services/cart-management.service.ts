import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts } from '../types/products.interface';

export interface CartProduct extends IProducts {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartManagementService {
  private productsSubject = new BehaviorSubject<CartProduct[]>([]);
  products$ = this.productsSubject.asObservable();

  private cartIsOpenSubject = new BehaviorSubject<boolean>(false);
  cartIsOpen$ = this.cartIsOpenSubject.asObservable();

  getTotal() {
    return this.productsSubject.value.reduce((acc, product) => {
      console.log(product);

      return acc + Number(product.price) * Number(product.quantity);
    }, 0);
  }

  setCartIsOpen(state: boolean) {
    this.cartIsOpenSubject.next(state);
  }

  addProductToCart(product: CartProduct) {
    const products = this.productsSubject.value;
    const productIsAlreadyInCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyInCart) {
      const newProducts = products.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + product.quantity,
          };
        }

        return cartProduct;
      });
      this.productsSubject.next(newProducts);
      return;
    }

    this.productsSubject.next([...products, product]);
  }

  decreaseProductQuantity(productId: number) {
    const newProducts = this.productsSubject.value
      .map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }

        return cartProduct;
      })
      .filter((cartProduct) => cartProduct.quantity > 0);

    this.productsSubject.next(newProducts);
  }

  increaseProductQuantity(productId: number) {
    const newProducts = this.productsSubject.value.map((cartProduct) => {
      if (cartProduct.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity + 1,
        };
      }

      return cartProduct;
    });

    this.productsSubject.next(newProducts);
  }

  removeProductFromCart(productId: number) {
    const newProducts = this.productsSubject.value.filter(
      (cartProduct) => cartProduct.id !== productId
    );

    this.productsSubject.next(newProducts);
  }
}
