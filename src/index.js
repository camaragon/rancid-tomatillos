import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));
