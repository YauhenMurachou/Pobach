import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import store from './redux/redux-store';
import App from './App';



// let renderEntireTree = (state) => {


// }

ReactDOM.render(
	<React.StrictMode>

		<Provider store={store}>
			<App
			// state={state}
			// dispatch={store.dispatch.bind(store)}
			// store={store}
			/>
		</Provider>

	</React.StrictMode>,
	document.getElementById('root')
);

// renderEntireTree(store.getState());

// store.subscribe(() => {
// 	let state = store.getState();
// 	renderEntireTree(state);
// });





