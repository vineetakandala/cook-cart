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
  @Input() id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

}
