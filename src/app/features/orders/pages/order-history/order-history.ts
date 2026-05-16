import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Navbar } from '../../../../layouts/navbar/navbar';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [Navbar, CommonModule, FormsModule],
  templateUrl: './order-history.html',
  styleUrl: './order-history.css',
})
export class OrderHistory {

  searchText: string = '';

 orders = [
  {
    id: '#ORD1025',
    product: 'Smart Watch',
    price: 4999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
  },

  {
    id: '#ORD1026',
    product: 'Running Shoes',
    price: 7499,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },

  {
    id: '#ORD1027',
    product: 'iPhone 15',
    price: 79999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },

  {
    id: '#ORD1025',
    product: 'Smart Watch',
    price: 4999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
  },

  {
    id: '#ORD1026',
    product: 'Running Shoes',
    price: 7499,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
  },

  {
    id: '#ORD1027',
    product: 'iPhone 15',
    price: 79999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'
  },

  {
    id: '#ORD1028',
    product: 'Wireless Headphones',
    price: 2999,
    status: 'Cancelled',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad'
  },

  {
    id: '#ORD1029',
    product: 'Bluetooth Speaker',
    price: 1999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  },

  {
    id: '#ORD1030',
    product: 'Laptop',
    price: 55000,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500'
  },

  {
    id: '#ORD1031',
    product: 'Fitness Band',
    price: 3499,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
  },

  {
    id: '#ORD1032',
    product: 'Men Jacket',
    price: 2299,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'
  },

  {
    id: '#ORD1033',
    product: 'T-Shirt Pack',
    price: 1499,
    status: 'Cancelled',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },

  {
    id: '#ORD1034',
    product: 'Sports Shoes',
    price: 5299,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d'
  },

  {
    id: '#ORD1035',
    product: 'Gaming Mouse',
    price: 2499,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db'
  },

  {
    id: '#ORD1036',
    product: 'Mechanical Keyboard',
    price: 4599,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae'
  },

  {
    id: '#ORD1037',
    product: 'DSLR Camera',
    price: 65999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
  },

  {
    id: '#ORD1038',
    product: 'Office Chair',
    price: 8999,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455'
  },

  {
    id: '#ORD1039',
    product: 'Tablet',
    price: 25999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0'
  },

  {
    id: '#ORD1040',
    product: 'Monitor',
    price: 12999,
    status: 'Cancelled',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf'
  },

  {
    id: '#ORD1041',
    product: 'Backpack',
    price: 1799,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
  },

  {
    id: '#ORD1042',
    product: 'Sunglasses',
    price: 999,
    status: 'Pending',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083'
  },

  {
    id: '#ORD1043',
    product: 'AirPods',
    price: 15999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434'
  },

  {
    id: '#ORD1044',
    product: 'Smart TV',
    price: 45999,
    status: 'Delivered',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6'
  }
];

filteredOrders = [...this.orders];

  searchOrders() {

  this.filteredOrders = this.orders.filter(order =>

    order.product
      .toLowerCase()
      .includes(this.searchText.toLowerCase())

  );

}

}