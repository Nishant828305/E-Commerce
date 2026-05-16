import { Routes } from '@angular/router';

import { Home } from './features/home/pages/home/home';

import { ProductList } from './features/products/pages/product-list/product-list';

import { ProductDetails} from './features/products/pages/product-details/product-details';

import { Cart } from './features/cart/pages/cart/cart';

import { Login } from './features/auth/pages/login/login';

import { Register } from './features/auth/pages/register/register';

import { Checkout } from './features/orders/pages/checkout/checkout';

import { OrderHistory } from './features/orders/pages/order-history/order-history';

import { Dashboard } from './features/admin/pages/dashboard/dashboard';

import { ManageOrders } from './features/admin/pages/manage-orders/manage-orders';



export const routes: Routes = [
  { path: '', component: Home },

  { path: 'products', component: ProductList },

  { path: 'product/:id', component: ProductDetails },

  { path: 'cart', component: Cart },

  { path: 'login', component: Login},

  { path: 'register', component: Register},

  { path: 'checkout', component: Checkout},

  { path: 'orders', component: OrderHistory },

  { path: 'admin', component: Dashboard },

  { path: 'Manage', component: ManageOrders}
];