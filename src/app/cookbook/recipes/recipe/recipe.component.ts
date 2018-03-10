import {Component, Input } from '@angular/core';
import {Recipe} from '../../recipe.model';
import {CookbookService} from '../../cookbook.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {

  @Input() recipe: Recipe;

  constructor(private cookbookService: CookbookService, private router: Router, private route: ActivatedRoute) {
  }

  onSelect() {
    this.cookbookService.recipeSelected.emit(this.recipe);
    console.log('emitted recipe');
    console.log(this.recipe);
    this.router.navigate([this.recipe.name], {relativeTo: this.route});
  }

}
