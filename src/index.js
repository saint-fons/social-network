import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DialogElement = [
    { name: "Alexandra", id: 1, age: 18},
    { name: "Dmitri", id: 2, age: 25},
    { name: "Masha", id: 3, age: 17},
    { name: "Vika", id: 4, age: 27}
]

let MessageElement = [
    { message: "message 1", number: "number"},
    { message: "message 2", number: "number"},
    { message: "message 3", number: "number"},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialog={DialogElement} message={MessageElement} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
