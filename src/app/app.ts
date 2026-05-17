import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PaymentFormComponent } from './features/payment/components/payment-form/payment-form';

import { PaymentSuccessComponent } from './features/payment/components/payment-success/payment-success';

import { PaymentFailedComponent } from './features/payment/components/payment-failed/payment-failed';

@Component({
  selector: 'app-root',

  imports: [
    RouterOutlet,
    PaymentFormComponent,
    PaymentSuccessComponent,
    PaymentFailedComponent
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}