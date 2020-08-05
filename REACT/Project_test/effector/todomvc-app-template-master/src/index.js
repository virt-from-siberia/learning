// src/index.js
import { using } from "effector-dom";
import { App } from "./view/app";

using(document.body, () => {
	App();
});
