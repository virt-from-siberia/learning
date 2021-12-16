import { Component, OnInit } from "@angular/core";
import { RecipeModule } from "../recipe.module";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Array<RecipeModule> = [
    new RecipeModule(
      "A test recipe",
      "this is simply a test",
      "https://www.simplyrecipes.com/thmb/5rj9-_i8HpX3r7ctgvx2vFu1y9I=/440x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg"
    ),
    new RecipeModule(
      "A test recipe",
      "this is simply a test",
      "https://www.simplyrecipes.com/thmb/5rj9-_i8HpX3r7ctgvx2vFu1y9I=/440x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
