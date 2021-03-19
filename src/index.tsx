import './index.css';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {StrictMode} from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';

const elem = document.getElementById('root')

render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  elem
);

reportWebVitals();
