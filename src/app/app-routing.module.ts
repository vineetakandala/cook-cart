import {NgModule} from '@angular/core';
import {CookbookComponent} from './cookbook/cookbook.component';
import {CartComponent} from './cart/cart.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './cookbook/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './cookbook/recipes/recipes.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent},
  { path: 'cookbook', component: CookbookComponent, children: [
      { path: 'recipes', component: RecipesComponent },
      { path: 'recipes/:recipe-name', component: RecipeDetailComponent}
    ]  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
