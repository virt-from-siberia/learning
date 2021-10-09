import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  name: string = '';
  speed: number = 0;
  model: string = '';
  colors = {
    car: '',
    salon: '',
    wheels: '',
  };
  options: string[] = [''];
  test: any = '';

  constructor() {}

  ngOnInit(): void {
    this.name = 'AUDI';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'crome',
    };
    this.options = ['ABS', 'TC'];
  }
}

interface IColors {}
