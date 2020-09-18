import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Apple Pie recipe', 'A recipe of an apple pie', 'https://itdev161.matcitdevelopment.org/ClassSection/Fall/Student07/assgn9/images/pies/apple.jpg'),
    new Recipe('Apple Pie recipe', 'A recipe of an apple pie', 'https://itdev161.matcitdevelopment.org/ClassSection/Fall/Student07/assgn9/images/pies/apple.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
