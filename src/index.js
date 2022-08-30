import React from "react"
import ReactDOM from "react-dom"
// ReactDOM  предоставляет специфические для DOM методы, например, render().
// React DOM обновляет DOM, чтобы он соответствовал переданным React-элементам
import { Provider } from "react-redux"
// Компонент <Provider> делает хранилище Redux доступным
// для любых вложенных компонентов, которым требуется доступ к хранилищу Redux.

import "./index.css"

import store from "./redux/redux-store"
import App from "./App"

ReactDOM.render(
  // Для рендеринга React-элемента в корневой узел DOM вызовите ReactDOM.render()
  // с React-элементом и корневым DOM-узлом в качестве аргументов:
  // корневой узел это div c классом root, находится в index.html в папке public
  <React.StrictMode>
    {/* StrictMode (строгий режим) - это инструмент для выделения потенциальных проблем в приложении.
		Он активирует дополнительные проверки и предупреждения. */}

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

