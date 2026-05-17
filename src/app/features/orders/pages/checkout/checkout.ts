import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

declare var Razorpay: any;

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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
    },
    {
      title: 'Nike Air Max',
      price: 8999,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1641745899178-021fafbb2317?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG5pa2UlMjBzaG9lfGVufDB8fDB8fHww'
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

  const options = {

    key: 'rzp_test_1DP5mmOlF5G5ag',

    amount: this.getTotal() * 100,

    currency: 'INR',

    name: 'Demo Store',

    description: 'Test Payment',

    handler: (response: any) => {

      alert('Payment Successful');

      console.log(response);

    },

    prefill: {

      name: this.shipping.name,

      email: this.shipping.email,

      contact: this.shipping.phone

    },

    theme: {
      color: '#000'
    }

  };

  const rzp = new Razorpay(options);

  rzp.open();
}
}