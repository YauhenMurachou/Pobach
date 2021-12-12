import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import store from './redux/redux-store';
import App from './App';
import StoreContext from './StoreContext';


let renderEntireTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>

			<StoreContext.Provider value={store}>
				<App
					// state={state}
					// dispatch={store.dispatch.bind(store)}
					// store={store}
				/>
			</StoreContext.Provider>

		</React.StrictMode>,
		document.getElementById('root')
	);
}

renderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	renderEntireTree(state);
});





