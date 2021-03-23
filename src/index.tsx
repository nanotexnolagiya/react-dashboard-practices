import './index.css';

import App from './App';
import { LocaleManagerProvider } from './common/components/i18n/LocaleManagerProvider';
import { MessagesProvider } from './common/components/i18n/MessagesProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './common/store';

const elem = document.getElementById('root');

render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <LocaleManagerProvider>
          <MessagesProvider>
            <App />
          </MessagesProvider>
        </LocaleManagerProvider>
      </Router>
    </Provider>
  </StrictMode>,
  elem
);

reportWebVitals();
