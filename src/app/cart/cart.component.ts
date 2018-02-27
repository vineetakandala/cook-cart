import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/igredient.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 10),
    new Ingredient('Tomtoes', 6),
    new Ingredient('Pears', 3),
  ];

  constructor() { }

  ngOnInit() {
  }

}
