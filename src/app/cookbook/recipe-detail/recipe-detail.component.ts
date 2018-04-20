import {Component, OnInit} from '@angular/core';
import {CartService} from '../../cart/cart.service';
import {Recipe} from '../recipe.model';
import {CookbookService} from '../cookbook.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  detailRecipe: Recipe;
  id: number;
  constructor(private cartService: CartService,
              private cookbookService: CookbookService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.detailRecipe = this.cookbookService.getRecipe(this.id);
      }
    );
  }

  onAddToCart() {
    this.cartService.addIngredients(this.detailRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
