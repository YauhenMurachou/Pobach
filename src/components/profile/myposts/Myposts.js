import React from 'react';
import Post from './post/Post.js';
// import classes from './Myposts.module.css'

const Myposts = () => {
	return <div>
		My posts
	<Post message = 'Hello, how are you?'/>
	<Post message = 'Привет, как дела?'/>
	<Post message = 'Прывітанне, як твае справы?'/>
	<Post />
	<Post />
	</div>
};

export default Myposts;


