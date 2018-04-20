import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/igredient.model';
import {CartService} from './cart.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  subscription: Subscription;


  constructor(private cartService: CartService) { }

  onEditIngredient(i) {

  }

  ngOnInit() {
    this.ingredients = this.cartService.getIngredients();
    this.subscription = this.cartService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
        console.log('Updated Ingredients');
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
