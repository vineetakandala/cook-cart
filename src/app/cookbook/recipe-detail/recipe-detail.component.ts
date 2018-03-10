import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../../cart/cart.service';
import {Recipe} from '../recipe.model';
import {CookbookService} from '../cookbook.service';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit{
  detailRecipe: Recipe;
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  onAddToCart() {
    this.cartService.addIngredients(this.detailRecipe.ingredients);
  }

}
