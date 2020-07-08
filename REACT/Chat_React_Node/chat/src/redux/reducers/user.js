const initialSate = {
    data: null,
    isAuth: window.localStorage.token ? true : false,
    token: window.localStorage.token,
};

export default (state = initialSate, { type, payload }) => {
    //FIXME: CONSOLE LOG ===========>
    console.log(type, payload);
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true,
                token: window.localStorage.token,
            };
        default:
            return state;
    }
};

// const initialState = {
//     data: null,
//     isAuth: window.localStorage.token ? true : false,
//     token: window.localStorage.token,
// };

// export default (state = initialState, { type, payload }) => {
//     switch (type) {
//         case "USER:SET_DATA":
//             return {
//                 ...state,
//                 data: payload,
//                 isAuth: true,
//                 token: window.localStorage.token,
//             };
//         default:
//             return state;
//     }
// };
