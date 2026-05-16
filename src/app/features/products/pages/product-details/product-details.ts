import { Component } from '@angular/core';
import { Navbar } from '../../../../layouts/navbar/navbar';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [Navbar],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {}
