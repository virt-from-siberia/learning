import React from "react";
import logo from "./logo.svg";
import "./App.css";

let a: number | string | null = 10;

a = null;

let names: Array<string> = ["ALES", "Viktor", "Valera"];
let names2: string[] = ["ALES", "Viktor", "Valera"];
names[0].toUpperCase();

let name = "it-incubator";

let sex: "mail" | "femail";

sex = "femail";

names.map((n) => {
  n.toUpperCase();
});

type AddressType = {
  city: string | null;
  country: string | null;
  street?: string | null;
  building?: string | null;
};

type UserType = {
  sayHello: (message: string) => void;
  name: string;
  age?: number;
  isSamurai: boolean;
  address: AddressType | null;
};

let initialStateType = {
  name: null as string | null,
  age: null as string | null,
  isSamurai: null as boolean | null,
  address: {
    country: null,
    city: null,
  } as AddressType | null,
  counter: null as number | null,
};

export type InitialStateType = typeof initialStateType;

let state: InitialStateType = {
  name: "aleksey",
  age: "string",
  isSamurai: true,
  address: {
    city: "Chita",
    country: "Russia",
  },
  counter: 10,
};

const sum: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

let GET_TASKS = "APP/GetTASKS";

type GetTasksActionType = {
  id: number;
  type: typeof GET_TASKS;
};

let action: GetTasksActionType = {
  type: GET_TASKS,
  id: 12,
};

type UserInfoType = {
  name: string;
  lastname: string;
  age: number;
  phone?: string;
};

type UserAddress = {
  city: string;
  street: string;
  build?: string;
};

const userProfile = {
  userInfo: {
    name: "Aleksey",
    lastname: "Elchin",
    age: 34,
    sex: 24,
  } as UserInfoType,
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
