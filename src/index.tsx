import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import './i18n';
import store from './redux/redux-store';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
