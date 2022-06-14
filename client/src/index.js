import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddTask from './components/AddTask';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/addTask' element={<AddTask/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

