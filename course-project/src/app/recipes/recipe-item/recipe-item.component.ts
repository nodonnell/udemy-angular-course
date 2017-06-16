import { Component, Input } from '@angular/core';
import { Recipe } from "../../shared/recipe.model";
import { RecipeService } from "../../shared/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
    console.log('Recipe selected: ' + this.recipe.name);
  }

}
