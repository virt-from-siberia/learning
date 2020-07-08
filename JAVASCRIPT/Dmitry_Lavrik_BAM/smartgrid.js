// const smartgrid = require('smart-grid');

// const settings = {
//     columns: 24,
//     offset: '10px',
//     container: {
//         maxWidth: '960px',
//         fields: '30px'
//     },
//     breakPoints: {
//         md: {
//             width: "992px",
//             fields: "20px"
//         },
//         sm: {
//             width: "720px",
//             fields: "10px"
//         },
//         xs: {
//             width: "576px",
//             fields: "5px"
//         },
//         xxs: {
//             width: "380px",
//             fields: "5px"
//         }
//     },
//     oldSizeStyle: false,
//     properties: [
//         'justify-content'
//     ]
// };

// smartgrid('./src/precss', settings);

const smartgrid = require('smart-grid');
const settings = {
    //Крличество колонок
    columns: 12,
    //Величина расстояние между колонками
    offset: '10px',
    //Настройки для wrapper(container)
    container: {
        //Максимальная ширина контейнета для контента
        maxWidth: '1280px',
        //Поля для wrapper 
        fields: '30px'
    },
    //Медиазапросы
    breakPoints: {
        xs:{
            width: '420px',
            fields: '10px'
        },
        sm:{
            width: '576px',
            fields: '10px'
        },
        md:{
            width: '768px',
            fields: '15px'
        },
        lg:{
            width: '992px',
            fields: '30px'
        },
        xl:{
            width: '1200px',
            fields: '30px'
        }
    },
    //Использовать новый синтаксис
    oldSizeStyle: false,
    properties: []
};

smartgrid('./src/precss', settings);