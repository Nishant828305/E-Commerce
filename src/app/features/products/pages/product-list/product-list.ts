import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Navbar } from '../../../../layouts/navbar/navbar';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [Navbar, RouterLink],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList {}