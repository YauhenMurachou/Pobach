import React from 'react';
import { connect } from 'react-redux';

import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profilePageReducer';
import Myposts from './Myposts';

// import store from '../../../redux/redux-store';


// const MypostsContainer = (props) => {

// 	// let state = props.store.getState().profilePage

// 	return (
// 	<StoreContext.Consumer>
// 		{
// 			(store) => {

// 				let state = store.getState().profilePage

// 				let addPostButton = () => {
// 					// props.store.dispatch(addPostActionCreator())
// 					store.dispatch(addPostActionCreator())
// 				};

// 				let onPostChange = (text) => {		
// 					// props.store.dispatch(updatePostActionCreator(text))
// 					store.dispatch(updatePostActionCreator(text))
// 				}
// 				return (
// 		<Myposts
// 		addPostButton={addPostButton}
// 		onPostChange={onPostChange}
// 		posts = {state.postsData}
// 		newPostText = {state.newPostText} />
// 		)
// 	}
// 	}
// 	</StoreContext.Consumer>
// 	)
// };
let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}


let mapDispatchToProps = (dispatch) => {
	return {
		addPostButton: () => {
			dispatch(addPostActionCreator())
		},
		onPostChange: (text) => {
			dispatch(updatePostActionCreator(text))
		}
	}
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsContainer;