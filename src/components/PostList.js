import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {
  addPost, editPost, deletePost, setStatus,
} from '../actions'
import AddPostInput from './AddPostInput'
import Post from './Post'

const PostList = ({
  posts, dispatchCreatePost, dispatchEditPost, dispatchDeletePost,
}) => {
  const [addingPost, setAddingPost] = useState(false)
  return (
    <>
      <Typography variant="h2">Posts</Typography>
      <div>{addingPost && <AddPostInput setAddingPost={setAddingPost} />}</div>
      {!addingPost && (
      <Button
        type="button"
        variant="contained"
        onClick={() => {
          setAddingPost(true)
          // console.log(posts)
        }}
      >
        Add Post
      </Button>
      )}
      <div>
        {posts && posts.map(post => (
          <Post key={post.id} id={post.id} posts={posts} />
        ))}

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: id => dispatch(editPost(id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
  dispatchCreatePost: post => dispatch(addPost(post)),
  dispatchSetStatus: status => dispatch(setStatus(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
