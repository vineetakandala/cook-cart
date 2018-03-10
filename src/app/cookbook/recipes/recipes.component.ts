import {Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {CookbookService} from '../cookbook.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  detailRecipe: Recipe;

  constructor(private cookbookService: CookbookService) {
  }

  ngOnInit() {
    this.recipes = this.cookbookService.getRecipes();
  }

}
