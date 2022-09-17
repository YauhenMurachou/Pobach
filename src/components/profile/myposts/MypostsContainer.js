import { connect } from 'react-redux';

import { addPostActionCreator } from '../../../redux/profilePageReducer';
import Myposts from './Myposts';

let mapStateToProps = (state) => {
	return {
		postsData: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPostButton: (newPost) => {
			dispatch(addPostActionCreator(newPost))
		}
	}
}

const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MypostsContainer;