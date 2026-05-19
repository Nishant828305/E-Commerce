import { Routes } from '@angular/router';


import { Home } from './features/home/pages/home/home';
import { ProductList } from './features/products/pages/product-list/product-list';
import { ProductDetails } from './features/products/pages/product-details/product-details';
import { Cart } from './features/cart/pages/cart/cart';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Checkout } from './features/orders/pages/checkout/checkout';
import { OrderHistory } from './features/orders/pages/order-history/order-history';
import { Dashboard } from './features/admin/pages/dashboard/dashboard';
import { AddProduct } from './features/admin/pages/add-product/add-product';
import { ManageOrders } from './features/admin/pages/manage-orders/manage-orders';
import { PaymentFormComponent } from './features/payment/components/payment-form/payment-form';
import { PaymentSuccessComponent } from './features/payment/components/payment-success/payment-success';
import { PaymentFailedComponent } from './features/payment/components/payment-failed/payment-failed';


export const routes: Routes = [

  { path: '', component: Home },

  { path: 'products', component: ProductList },

  { path: 'product/:id', component: ProductDetails },

  { path: 'cart', component: Cart },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

  { path: 'checkout', component: Checkout },

  { path: 'payment', component: PaymentFormComponent },

  { path: 'payment-success', component: PaymentSuccessComponent },

  { path: 'payment-failed', component: PaymentFailedComponent },

  { path: 'orders', component: OrderHistory },

  { path: 'admin', component: Dashboard },
  
  { path: 'add-product',component: AddProduct},

  { path: 'manage', component: ManageOrders },

];