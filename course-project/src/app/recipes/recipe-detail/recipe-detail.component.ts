import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from "../../shared/recipe.model";
import { RecipeService } from "../../shared/recipe.service";
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.recipe = this.recipeService.getRecipe(+params['id']);
      });
  }

  onSendToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}