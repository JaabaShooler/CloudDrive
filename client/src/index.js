import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './Reducers/index'
import {Provider} from "react-redux";
import "./Sass/Main.sass"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
