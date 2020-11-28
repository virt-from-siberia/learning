export const PUT_DATA = "PUT_DATA";

//иньекция данных в state
export const putData = (dataFromServer) => {
    return {
        type: PUT_DATA,
        payload: dataFromServer,
    };
};

//Redux thiunk в отличии от редакс, возврашяет функцию а не обьект
//На вход получиет функцию dispatch и getState
//getState возврашяет то что у нас сейчас в текушем state
export const loadData = () => (dispatch, getState) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => response.json())
        //Вызываем функцию pudData делает ниьекцию даных в state
        //Оборачиваем ее в dispatch
        .then((json) => dispatch(putData(json)));
};
