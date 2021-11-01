import React from 'react'
import { connect } from 'react-redux'
import {
  addPost, editPost, deletePost, setStatus,
} from '../actions'

const Post = ({
  id, title, url, description, dispatchEditPost, dispatchDeletePost,
}) => {
  const handleEdit = () => {
    dispatchEditPost({
      id, title, url, description,
    })
  }

  const handleDelete = () => {
    dispatchDeletePost({ id })
  }

  return (
    <div className="post">
      <>
        <img src={url} alt="" width="100px" height="100px" />
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>

      </>
      <button type="submit" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post)
