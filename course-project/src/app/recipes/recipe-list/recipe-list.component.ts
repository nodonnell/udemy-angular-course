import { Component, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test Recipe', 'This is a test too.', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  onSelectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
