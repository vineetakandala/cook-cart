import {Ingredient} from '../shared/igredient.model';
import {Subject} from 'rxjs/Subject';

export class CartService{

  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 10),
    new Ingredient('Tomtoes', 6),
    new Ingredient('Pears', 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients);
  }

  editIngredient(index: number) {
  }

}
