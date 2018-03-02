import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {

  @Input() detailRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }


}
