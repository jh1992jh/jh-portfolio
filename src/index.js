import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components'; 

const GlobalStyles = createGlobalStyle`
 body * {
    font-family: 'Nunito', sans-serif;
    color: #222;
 }

 a {
     text-decoration: none;
 }
`

ReactDOM.render(
    <Fragment>
    <App />
    <GlobalStyles />
    </Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
