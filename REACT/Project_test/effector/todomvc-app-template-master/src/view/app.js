// src/view/app.js
import { h, spec } from "effector-dom";
import classes from "todomvc-app-css/index.css";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export const App = () => {
	// создадим section элемент
	h("section", () => {
		// и укажем ему класс
		spec({ attr: { class: classes.todoapp } });

		// также выведем остальные части приложения
		Header();
		Main();
		Footer();
	});
};
