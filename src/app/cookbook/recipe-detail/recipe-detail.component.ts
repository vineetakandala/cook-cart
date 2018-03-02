import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Output() allRecipes = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }


  onAllRecipes(){
    this.allRecipes.emit(true);
  }

}
