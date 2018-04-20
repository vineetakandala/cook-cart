import {NgModule} from '@angular/core';
import {CookbookComponent} from './cookbook/cookbook.component';
import {CartComponent} from './cart/cart.component';
import {RouterModule, Routes} from '@angular/router';
import {RecipeDetailComponent} from './cookbook/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './cookbook/recipes/recipes.component';
import {RecipeEditComponent} from './cookbook/recipe-edit/recipe-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent},
  { path: 'cookbook/recipes', component: CookbookComponent, children: [
      { path: '', component: RecipesComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id/:recipe-name', component: RecipeDetailComponent},
      { path: ':id/:recipe-name/edit', component: RecipeEditComponent}
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
