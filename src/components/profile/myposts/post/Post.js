import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {


	return (
		<div>
			<div className={classes.item}>
			<img src = 'https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
				{props.message}
				<div>
					<span>
						like
					</span>
					<span>
						{props.likesCount}
					</span>
				</div>
			</div>
		</div>
	)
};

export default Post;


