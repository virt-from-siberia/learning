//Core
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

//Reducer
import { rootReducer } from "./rootReducer";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => "#129bfe",
        prevState: () => "#1c5faf",
        action: () => "#149945",
        nextState: () => "#f042d3",
        error: () => "#ff0005",
    },
});

//ПОДКЛЮЧЕНИЕ СОСТОЯНИЯ ИЗ LOCALSTORAGE ПРИ ПЕРВОЙ ЗАГРУЗКЕ ПРОГРАММЫ

const preloadedState = JSON.parse(localStorage.getItem("gallery"));

//ПЕРЕДАЕМ СОХРАНЕННОЕ СОСТОЯНИИЕ ИЗ LOCALSORAGE ВТОРЫМ АГРУМЕНТОМ В CREATESTORE
export const store = preloadedState
    ? //ЕСЛИ В LOCALSTORAGE НИЧЕГО НЕТ ТО ВЕРНУТЬ БЕЗ preloadedState
      createStore(rootReducer, preloadedState, applyMiddleware(logger))
    : createStore(rootReducer, applyMiddleware(logger));

//У STORE ЕСТЬ МЕТОД ПОДПИСКА subscribe
//ПРИНЕМАЕТ CALL BACK  В КАЧЕСТВЕ АРГУМЕНТА
// ЭТОТ CALL BACL БУДЕТ ВЫЗЫВАТСЯ ПРИ КАЖДОМ ВЫЗОВЕ STORE DISPATCH
store.subscribe(() => {
    const state = store.getState();
    //ЗАПИСЬ СОСТОЯНИЯ В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ БРАУЗЕРА
    localStorage.setItem("gallery", JSON.stringify(state));
});
