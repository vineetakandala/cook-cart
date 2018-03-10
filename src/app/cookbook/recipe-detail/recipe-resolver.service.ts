import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from '../recipe.model';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {CookbookService} from '../cookbook.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private cookbookService: CookbookService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.cookbookService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log(recipe);
        return recipe;
      }
    );
  }
}
