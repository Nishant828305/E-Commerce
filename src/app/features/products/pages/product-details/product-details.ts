import { Component } from '@angular/core';
import { Navbar } from '../../../../layouts/navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [Navbar, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})

export class ProductDetails {

  addToCart() {
    alert("Product Added to the Cart");
  }

}