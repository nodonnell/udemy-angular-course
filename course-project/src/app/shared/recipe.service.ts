import { Recipe } from "./recipe.model";
import { Ingredient } from './ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Burger',
      'A big burger.',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe('Schnitzel',
      'A tasty schnitzel.',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Meat', 1),
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
