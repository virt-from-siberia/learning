import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import stores from '~s';
import { observer, Provider } from 'mobx-react';


stores.products.load();

ReactDom.render(<Provider stores={stores}><App /></Provider>, document.querySelector('#app'));