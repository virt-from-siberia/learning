import AppService from './moduls/app.service'
import {
    config
} from './moduls/config';
import './moduls/header.component';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';



console.log('Config key: ', config.key);
const service = new AppService('Hellow world!');
service.log();


const array = [3, 5, 7];
const [one, two, three] = array;


console.log(one + ' ' + two + ' ' + three);