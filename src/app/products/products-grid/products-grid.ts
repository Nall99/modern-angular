import { Component, signal } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon, MatInputModule, FormsModule, MatFormFieldModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "Experience the ultimate in wireless audio with our premium headphones.",
      price: 299.99,
      originalPrice: 399.99
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      description: "Stay on top of your health and fitness goals with our smart fitness tracker.",
      price: 149.99,
    },
    {
      id: 3,
      name: "4K Ultra HD Smart TV",
      description: "Transform your living room into a home theater with our 4K Ultra HD Smart TV.",
      price: 799.99,
      originalPrice: 999.99
    }
  ])

}
