import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/Category';
import { DataHandlerService } from '../../service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
  }
}
