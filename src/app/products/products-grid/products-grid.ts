import { Component, signal } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../product';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIcon],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.scss',
})
export class ProductsGrid {

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
    }
  ])

}
