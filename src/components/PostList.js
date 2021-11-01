import React, { useState } from 'react'
import { connect } from 'react-redux'
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
      <h1>Posts</h1>
      <div>{addingPost && <AddPostInput setAddingPost={setAddingPost} />}</div>
      <button type="button" onClick={() => setAddingPost(true)}>Add Post</button>
      <div>
        {posts && posts.map(post => (
          <Post key={post.id} id={post.id} />
        ))}

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
  status: state.status,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: id => dispatch(editPost(id)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
  dispatchCreatePost: post => dispatch(addPost(post)),
  dispatchSetStatus: status => dispatch(setStatus(status)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
