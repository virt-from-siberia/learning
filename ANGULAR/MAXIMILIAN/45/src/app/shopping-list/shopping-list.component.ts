import { Component, OnInit } from "@angular/core";
import { IngredientModule } from "../shared/ingredient.module";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModule[] = [
    new IngredientModule("Apples", 5),
    new IngredientModule("Tomatoes", 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
