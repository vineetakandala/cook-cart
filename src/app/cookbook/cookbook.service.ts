import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/igredient.model';

export class CookbookService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tacos',
      'Test Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingredient('Tacos', 2), new Ingredient('Jalepenos', 1), new Ingredient('Salsa', 1)]),
    new Recipe(
      'One Pot Pasta',
      'Test Description',
      'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Parsley', 1), new Ingredient('Alfredo Sauce', 1)]),
new Recipe(
      'Test Name',
      'Test Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingredient('Tacos', 2), new Ingredient('Jalepenos', 1), new Ingredient('Salsa', 1)]),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Parsley', 1), new Ingredient('Alfredo Sauce', 1)]),
new Recipe(
      'Test Name',
      'Test Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingredient('Tacos', 2), new Ingredient('Jalepenos', 1), new Ingredient('Salsa', 1)]),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Parsley', 1), new Ingredient('Alfredo Sauce', 1)]),
new Recipe(
      'Test Name',
      'Test Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingredient('Tacos', 2), new Ingredient('Jalepenos', 1), new Ingredient('Salsa', 1)]),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Parsley', 1), new Ingredient('Alfredo Sauce', 1)]),
new Recipe(
      'Test Name',
      'Test Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg',
      [new Ingredient('Tacos', 2), new Ingredient('Jalepenos', 1), new Ingredient('Salsa', 1)]),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://minimalistbaker.com/wp-content/uploads/2017/07/AMAZING-Garlicky-Sweet-Potato-Pasta-with-Crispy-Kale-7-ingredients-required-vegan-glutenfree-sweet-potato-pasta-healthy-recipe-9.jpg',
      [new Ingredient('Spaghetti', 1), new Ingredient('Parsley', 1), new Ingredient('Alfredo Sauce', 1)])
    ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

}
