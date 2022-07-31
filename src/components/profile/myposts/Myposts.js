import React from "react"

import Post from "./post/Post.js"
import MyPostsForm from "./MyPostsForm"

import classes from "./Myposts.module.css"

const Myposts = (props) => {
  const addPostButton = (values) => {
    props.addPostButton(values.newPost)
  }

  const posts = props.postsData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} id={post.id} key={post.id} />
  ))

  return (
    <div>
      <h3 className={classes.item}>My posts</h3>

      <MyPostsForm onSubmit={addPostButton} />

      <div className={classes.item}>{posts}</div>
    </div>
  )
}

export default Myposts
