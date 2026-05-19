import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProduct {

  product = {
    name: '',
    price: '',
    category: '',
    image: ''
  };

  addProduct() {

    console.log(this.product);

    alert('Product Added Successfully');

    // reset form
    this.product = {
      name: '',
      price: '',
      category: '',
      image: ''
    };
  }
}