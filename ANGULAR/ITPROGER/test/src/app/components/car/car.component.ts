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
  isEditable: boolean = false;

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
    if (value === '') return false;
    this.options.unshift(value);
    return false;
  }

  deleteOpt(value: string): boolean {
    console.log('delete', value);
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] === value) this.options.splice(i, 1);
    }
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
  showEdit(): boolean {
    this.isEditable = !this.isEditable
    return false;
  }
}

interface IColors {}
