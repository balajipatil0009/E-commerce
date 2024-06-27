import { Component } from '@angular/core';
import data from '../../../../public/assets/products.json';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  data = data;
}
