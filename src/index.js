import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { About } from './pages/About';
import { Users } from './pages/Users';
import { User } from './pages/User';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:userId" element={<User />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
