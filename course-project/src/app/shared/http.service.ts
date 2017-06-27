import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from './recipe.service';

@Injectable()
export class HttpService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  recipeDataNode = 'https://udemy-ng-http-de73a.firebaseio.com/recipes.json';

  loadRecipeData() {
    const getRequest = this.http.get(this.recipeDataNode)
      .map(
        (response: Response) => {
          const data = response.json();
          for (let recipe of data) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return data;
        }
      );
    getRequest.subscribe(
      (recipeData: any[]) => {
        this.recipeService.loadRecipes(recipeData);
        alert('Load successful!');
      },
      (error) => alert('Warning: load unsuccessful!')
    );
  }

  saveRecipeData() {
    const recipeData = this.recipeService.getRecipes();
    const putRequest = this.http.put(this.recipeDataNode, recipeData);
    putRequest.subscribe(
      (response) => alert('Save successful!'),
      (error) => alert('Warning: save unsuccessful!')
    );
  }

}
