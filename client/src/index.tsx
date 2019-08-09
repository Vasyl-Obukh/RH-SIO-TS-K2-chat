import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import { ThemeProvider } from 'styled-components';
import App from './components/App';

const wrapper = document.getElementById('root');

render(
  <Router>
    <App />
  </Router>,
  wrapper
);