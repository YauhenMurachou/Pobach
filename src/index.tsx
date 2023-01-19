import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './i18n';

import store from './redux/redux-store';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

{
  /* StrictMode (строгий режим) - это инструмент для выделения потенциальных проблем в приложении.
		Он активирует дополнительные проверки и предупреждения. */
}
