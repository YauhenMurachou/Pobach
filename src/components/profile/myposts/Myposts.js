import React from 'react';
import Post from './post/Post.js';
import classes from './Myposts.module.css'

const Myposts = () => {
	return <div>
		<h3>My posts</h3>
		<div>
			<div>
				<textarea></textarea>
			</div>
			<div>
				<button>
					Add post
				</button>
			</div>
		</div>
		<div className={classes.item}>
			<Post message='Hello, how are you?' />
			<Post message='Привет, как дела?' />
			<Post message='Прывітанне, як твае справы?' />
			<Post />
			<Post />
		</div>
	</div>
};

export default Myposts;


