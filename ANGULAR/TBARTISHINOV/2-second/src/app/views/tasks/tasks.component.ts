import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { DataHandlerService } from 'src/app/service/data-handler.service';
import { Task } from '../../model/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = [
    'color',
    'id',
    'title',
    'date',
    'priority',
    'category',
  ];

  dataSource: MatTableDataSource<Task> | any; // контейнер - источник данных для таблицы

  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit() {
    this.dataHandler.taskSubject.subscribe((tasks) => (this.tasks = tasks));

    // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  // в зависимости от статуса задачи - вернуть цвет названия
  getPriorityColor(task: Task): string {
    if (task.priority && task.priority.color) return task.priority.color;
    return '#fff';
  }

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  refreshTable(): Task | void {
    if (this.dataSource) this.dataSource.data = this.tasks;
    // обновить источник данных (т.к. данные массива tasks обновились)
  }
}
