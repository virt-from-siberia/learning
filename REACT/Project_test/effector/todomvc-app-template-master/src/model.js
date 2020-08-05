// src/model.js

import { createStore, createEvent, combine } from "effector";

// все задачи
export const $todos = createStore([]);

// текущий фильтр, для простоты будет null/true/false
export const $activeFilter = createStore(null);

export const $filteredTodods = combine($todos, $activeFilter, (todos, filter) =>
	filter === null ? todos : todos.filter((todo) => todo.completed === filter)
);

// добавление новой задачи
export const appended = createEvent();

// выполнение/снятие выполнения задачи
export const toggled = createEvent();

// удаление задачи
export const removed = createEvent();

// выполнение всех задач
export const allCompleted = createEvent();

// удаление выполненных задач
export const completedRemoved = createEvent();

// фильтрация задач
export const filtered = createEvent();

$todos
	// добавление новой задачи
	.on(appended, (state, title) => [...state, { title, completed: false }])
	// удаление задачи. Для простоты будем проверять title
	.on(removed, (state, title) => state.filter((item) => item.title !== title))
	// выполнение/снятие выполнения
	.on(toggled, (state, title) =>
		state.map((item) =>
			item.title === title ? { ...item, completed: !item.completed } : item
		)
	)
	// выполнение всех задач
	.on(allCompleted, (state) =>
		state.map((item) => (item.completed ? item : { ...item, completed: true }))
	)
	// удаление выполненных задач
	.on(completedRemoved, (state) => state.filter((item) => !item.completed));

$activeFilter
	// фильтрация
	.on(filtered, (_, filter) => filter);
