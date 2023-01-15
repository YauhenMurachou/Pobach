import React from 'react';
import ReactDOM from 'react-dom/client';
// ReactDOM  предоставляет специфические для DOM методы, например, render().
// React DOM обновляет DOM, чтобы он соответствовал переданным React-элементам
import { Provider } from 'react-redux';
// Компонент <Provider> делает хранилище Redux доступным
// для любых вложенных компонентов, которым требуется доступ к хранилищу Redux.

import './i18n';

import './index.css';

import store from './redux/redux-store';
import App from './App';

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

// Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render()
// с React-элементом и корневым DOM-узлом в качестве аргументов:
// корневой узел это div c классом root, находится в index.html в папке public

{
  /* StrictMode (строгий режим) - это инструмент для выделения потенциальных проблем в приложении.
		Он активирует дополнительные проверки и предупреждения. */
}
