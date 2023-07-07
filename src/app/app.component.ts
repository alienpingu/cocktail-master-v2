import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.getDrinksByName("");
  }
  title = 'cocktail-master-v2';
  drinkList: any[] = [];

  getDrinksByName = async (query: string) => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query)
    .then(response => response.json())
    .then(data => {
      this.drinkList = data.drinks
    })
    .catch(err => console.error(err));
  }

  getDrinksByIngredient = async (query: string) => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+query)
    .then(response => response.json())
    .then(data => {
      this.drinkList = data.drinks
    })
    .catch(err => console.error(err));
  }

}
