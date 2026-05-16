import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  cartItems = [
    {
      title: 'Laptop',
      price: 50000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },
    {
      title: 'Headphone',
      price: 3000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    }
  ];

  shipping = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  };

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  placeOrder() {
    console.log('Order Placed');
    console.log(this.shipping);
  }
}