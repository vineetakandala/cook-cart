import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartEditComponent } from './cart/cart-edit/cart-edit.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { RecipesComponent } from './cookbook/recipes/recipes.component';
import { RecipeComponent } from './cookbook/recipes/recipe/recipe.component';
import { RecipeDetailComponent } from './cookbook/recipe-detail/recipe-detail.component';
import { RecipeSearchComponent } from './cookbook/recipe-search/recipe-search.component';
import { RecipeFilterComponent } from './cookbook/recipe-filter/recipe-filter.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import {CartService} from './cart/cart.service';
import {AppRoutingModule} from './app-routing.module';
import {CookbookService} from './cookbook/cookbook.service';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartEditComponent,
    CookbookComponent,
    RecipesComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeSearchComponent,
    RecipeFilterComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CartService,
    CookbookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
