import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RenderExample1 from './RenderExample1';
import ConditionalExample1 from './ConditionalExample1';
import ConditionalExample2 from './ConditionalExample2';
import reportWebVitals from './reportWebVitals';
import ListExample1 from './ListExample1';

// const myFirstElement = <h1> Hello React </h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const myCars = ["ford", "chevro"];
// root.render(myFirstElement);
root.render(
  <React.StrictMode>
    <RenderExample1 />
    <ConditionalExample1 cars = {myCars}/>
    <ConditionalExample2 isGoal = {true}/>
    <ListExample1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
