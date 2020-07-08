

const smartgrid = require('smart-grid');
const settings = {
	/* less || scss || sass || styl */
	outputStyle: 'less',
    //Крличество колонок
    columns: 12,
    //Величина расстояние между колонками
    offset: '30px',
    //Настройки для wrapper(container)
    container: {
        //Максимальная ширина контейнета для контента
        maxWidth: '1280px',
        //Поля для wrapper 
        fields: '30px'
    },
    //Медиазапросы
    breakPoints: {
        xs: {
            width: '420px',
            fields: '10px'
        },
        sm: {
            width: '576px',
            fields: '10px'
        },
        md: {
            width: '768px',
            fields: '15px'
        },
        lg: {
            width: '992px',
            fields: '30px'
        },
        xl: {
            width: '1200px',
            fields: '30px'
        }
    },
    //Использовать новый синтаксис
    oldSizeStyle: false,
    properties: []
};
//ПАПКА ВЫВОДА
smartgrid('./less', settings);