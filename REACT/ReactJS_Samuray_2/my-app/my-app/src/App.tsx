import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  let a: number = 10;
  let isSamurai: boolean | null = true;

  let names: Array<string> = ['Aleksey', 'Lena', 'Egor']

  names[0].toUpperCase();

  let name: string = 'Ivan';
  name = 'Aleksey';

  let sex: 'male' | 'female';
  sex = 'male';


  names.map(n => {

  })

  const sum : (a : number, b: number) => number = (a = 0, b = 2) => {
    return a + b;
  }


  sum(20 , 10);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

type AddressType = {
  city?: string | null
  country?: string | null
}

type UserType = {
  sayHello: (message : string) => void
  name: string
  age?: number
  isSamurai: boolean,
  address: AddressType | null
}


let initialState  = {
  name: null as string | null,
  age: null as number | null,
  isSamurai: true as boolean | null,
  addresses: [] as Array <AddressType>,
  counter : 10 as number | null
}

export type InitialStateType = typeof initialState;

let state : InitialStateType = {
  name: 'Aleksy',
  age: 23,
  isSamurai: true ,
  addresses: [{city : 'Chita', country : 'Russia'}],
  counter : 25
}

let GET_TASKS = "APP/getTASKS";

type GetTasksActionType = {
  id : number,
  type : typeof GET_TASKS
}


  let action : GetTasksActionType = {
  type : "GET_TASKS",
  id : 12
}


export default App;
