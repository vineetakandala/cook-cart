import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/igredient.model';
import {CartService} from '../cart.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.scss']
})
export class CartEditComponent implements OnInit {

  @ViewChild('f') addIngredientsForm: ElementRef;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm){
    const newIngredient = new Ingredient(
      form.value.ingredientName,
      form.value.ingredientAmount
    );
    this.cartService.addIngredient(newIngredient);
  }

}
