import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/igredient.model';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.ingredients = this.cartService.getIngredients();
    this.cartService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log('Updated Ingredients');
      }
    );
  }

}
