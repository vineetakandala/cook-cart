import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {CookbookService} from '../cookbook.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];

  constructor(private cookbookService: CookbookService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.recipes = this.cookbookService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
