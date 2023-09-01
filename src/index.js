import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import RenderExample1 from './RenderExample1';
import ConditionalExample1 from './ConditionalExample1';
import ConditionalExample2 from './ConditionalExample2';
import reportWebVitals from './reportWebVitals';
import ListExample1 from './ListExample1';
import FormsExample1 from './FormsExamples/FormsExample1';
import FormsExample2 from './FormsExamples/FormsExample2';
import FormsExample3 from './FormsExamples/FormsExample3';
import FormsExample4 from './FormsExamples/FormsExample4';
import FormsExample5 from './FormsExamples/FormsExample5';

// const myFirstElement = <h1> Hello React </h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
const myCars = ["ford", "chevro"];
// root.render(myFirstElement);
root.render(
      <React.StrictMode>
        <div>
          <RenderExample1 />
        </div>
        <div>
          <ConditionalExample1 cars = {myCars}/>
        </div>
        <div>
          <ConditionalExample2 isGoal = {true}/>
        </div>
        <div>
          <ListExample1 />
        </div>
        <div>
          <FormsExample1 />
        </div>
        <div>
          <FormsExample2 />
        </div>
        <div>
          <FormsExample3 />
        </div>
        <div>
          <FormsExample4 />
        </div>
        <div>
          <FormsExample5 />
        </div>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
