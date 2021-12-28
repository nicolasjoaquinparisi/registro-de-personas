import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import AppIndex from './routes/AppIndex';
import Persons from './routes/Persons';
import Jobs from './routes/Jobs';
import NewPerson from './routes/NewPerson';
import NewJob from './routes/NewJob';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import JobsProvider from './context/JobsContext';

ReactDOM.render(
  <React.StrictMode>
    <JobsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={ <AppIndex /> } />
            <Route path="persons" element={<Persons />} />
            <Route path="jobs" element={<Jobs /> } />
            <Route path="new-person" element={<NewPerson />} />
            <Route path="new-job" element={<NewJob />} /> 
            <Route path="edit-person/:id" element={<NewPerson />} />
          </Route>

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
    </JobsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
