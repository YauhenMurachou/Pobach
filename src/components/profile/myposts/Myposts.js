import React from 'react';
import { reduxForm } from 'redux-form';

import Post from './post/Post.js';
import MyPostsForm from './MyPostsForm';

import classes from './Myposts.module.css';

const MyPostsReduxForm = reduxForm({ form: 'MyPosts' })(MyPostsForm);

const Myposts = (props) => {

	let addPostButton = (values) => {
		props.addPostButton(values.newPost)
	}

	let posts = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} />)

	return <div>
		<h3 className={classes.item}>My posts</h3>

		<MyPostsReduxForm onSubmit={addPostButton} />

		<div className={classes.item}>
			{posts}
		</div>
	</div>
};

export default Myposts;


