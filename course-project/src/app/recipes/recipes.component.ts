import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from "../shared/recipe.model";
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {
  //selectedRecipe: Recipe;
  //recipeIndex: number = 0;

  //constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }
}
