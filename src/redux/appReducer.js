import { setUserDataThunkCreator } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
	isInitialized: false
};

export const appReducer = (state = initialState, action) => {

	switch (action.type) {

		case INITIALIZED_SUCCESS: {
			return {
				...state,
				isInitialized: true
			}
		}

		default:
			return state;
	}
}

export const initializedSuccessAction = () => ({ type: INITIALIZED_SUCCESS })

export const initializedThunkCreator = () => {
	return (dispatch) => {
		const promise = dispatch(setUserDataThunkCreator())
		promise.then(() => dispatch(initializedSuccessAction()))
	}
}



