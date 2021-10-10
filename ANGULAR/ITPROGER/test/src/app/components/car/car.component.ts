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
    this.options = ['ABS', 'TC', 'Autopilot'];
  }
  addOpt(value: string): boolean {
    console.log('lol', value);
    this.options.unshift(value);
    return false;
  }

  selectCar(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 235;
      this.model = '7';
      this.colors = {
        car: 'black',
        salon: 'black',
        wheels: 'steel',
      };
    }
  }
}

interface IColors {}
