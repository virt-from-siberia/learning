var mockApiData = [
    {
        id: 1,
        name: "one"
    },
    {
        id: 2,
        name: "two"
    },
    {
        id: 3,
        name: "three"
    },
    {
        id: 4,
        name: "four"
    },
    {
        id: 5,
        name: "five"
    }
];

export const getTracks = () => dispatch => {
    //NOTE/: Вызывается функция с передаваемым в нее аргументом dispatch

    setTimeout(() => {
        dispatch({
            type: "FETCH_TRACK_SUCCESS",
            payload: mockApiData
        });
    }, 2000);
};
