import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  backgroundToggle = false;
  toggle = false;
  newToggle = false;
  arr = [3, 5, 6, 13];
  obj = [
    {
      title: 'Post 1',
      author: 'Aleksey',
      comments: [
        {
          name: 'Max',
          title: 'lorem 1',
        },
        {
          name: 'Max',
          title: 'lorem 2',
        },
        {
          name: 'Max',
          title: 'lorem 3',
        },
      ],
    },
    {
      title: 'Post 1',
      author: 'Aleksey',
      comments: [
        {
          name: 'Max',
          title: 'lorem 1',
        },
        {
          name: 'Max',
          title: 'lorem 2',
        },
        {
          name: 'Max',
          title: 'lorem 3',
        },
      ],
    },
  ];
  now: Date = new Date();
}
