import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import App from './App';
import NewPerson from './routes/NewPerson';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="new-person" element={<NewPerson />} /> 
        <Route path="edit-person/:id" element={<NewPerson />} /> 
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
