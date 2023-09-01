import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import './index.css';
import App from './App';
import Test from './Examples/Test';

// const myFirstElement = <h1> Hello React </h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);
root.render(
      <React.StrictMode>
        <App />
        <Test />
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
