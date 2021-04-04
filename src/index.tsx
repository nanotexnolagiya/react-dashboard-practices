import './index.css';

import App from './App';
import { LocaleManagerProvider } from './common/components/i18n/LocaleManagerProvider';
import { MessagesProvider } from './common/components/i18n/MessagesProvider';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { store } from './common/store';

const elem = document.getElementById('root');

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options = {
    onUnhandledRequest(req: any) {
      console.error('Found an unhandled %s request to %s', req.method, req.url.href);
    },
  };
  worker.start(options).catch(console.log);
}

render(
  <Provider store={store}>
    <Router>
      <LocaleManagerProvider>
        <MessagesProvider>
          <App />
        </MessagesProvider>
      </LocaleManagerProvider>
    </Router>
  </Provider>,
  elem
);

reportWebVitals();
