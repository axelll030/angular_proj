import { Recipe } from './../recipe.model';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Apple Pie recipe',
      'A recipe of an apple pie',
      'https://itdev161.matcitdevelopment.org/ClassSection/Fall/Student07/assgn9/images/pies/apple.jpg'
    ),
    new Recipe(
      'Raspberry Pie recipe',
      'A recipe of an raspberry pie',
      'https://www.raspberrypi-spy.co.uk/wp-content/uploads/2013/06/default_featured-702x336.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
