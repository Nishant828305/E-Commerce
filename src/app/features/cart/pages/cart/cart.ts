import { Component } from '@angular/core';
import { Navbar } from '../../../../layouts/navbar/navbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [Navbar,RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {}