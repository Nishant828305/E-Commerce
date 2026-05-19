import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-manage-orders',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './manage-orders.html',
  styleUrl: './manage-orders.css',
})
export class ManageOrders {}
