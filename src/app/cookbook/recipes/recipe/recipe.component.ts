import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    this.selectedRecipe.emit();
  }

}
