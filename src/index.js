import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/reduxStore";
import 'bootstrap/dist/css/bootstrap.min.css';

const rerenderHtml = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state} dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    )
}

rerenderHtml(store.getState())

store.subscribe( () => {
    let state = store.getState()
    rerenderHtml(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
