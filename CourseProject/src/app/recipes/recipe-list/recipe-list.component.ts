import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasanha', 'Lasanha é feita com essas fitas colocadas em camadas, e entremeadas com recheio e molho.', 'https://www.pingodoce.pt/wp-content/uploads/2015/03/lasanha-617-516x310.jpg'),
    new Recipe('Salada César', 'Salada César é uma salada preparada com alface romana e molho Caesar.', 'https://www.pingodoce.pt/wp-content/uploads/2019/07/salada-cesar-com-croutons-1.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
