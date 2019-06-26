import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./sass/App.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCircleNotch } from '@fortawesome/pro-regular-svg-icons';
import { faSadCry } from '@fortawesome/pro-light-svg-icons';

library.add(faSearch, faCircleNotch, faSadCry);

ReactDOM.render(<App/>, document.querySelector('#root'));