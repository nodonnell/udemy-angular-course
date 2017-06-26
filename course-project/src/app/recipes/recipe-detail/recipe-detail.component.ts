import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  id: number;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  onSendToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes']);
  }
}