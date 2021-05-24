import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthDAO } from './components/Firebase/AuthDAO';

ReactDOM.render(
  <AuthDAO>
    <App />
  </AuthDAO>,
  document.getElementById('root')
);
