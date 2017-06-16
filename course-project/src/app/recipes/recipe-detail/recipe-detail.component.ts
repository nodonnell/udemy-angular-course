import { Component, Input } from '@angular/core';
import { Recipe } from "../../shared/recipe.model";
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onSendToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
