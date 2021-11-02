import React from 'react'
import { connect } from 'react-redux'
import {
  addPost, editPost, deletePost, setStatus,
} from '../actions'
import PostInput from './PostInput'

const Post = ({ id, posts, dispatchDeletePost }) => {
  const [{ title, url, description }] = posts.filter(post => post.id === id)
  const handleDelete = () => {
    dispatchDeletePost({ id })
  }
  const [editing, setEditing] = React.useState(false)
  return (
    <>
      {!editing && (
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
        <button type="submit" onClick={e => setEditing(true)}>Edit</button>
        <button type="button" onClick={() => handleDelete()}>Delete</button>
      </div>
      )}
      {editing && (<PostInput id={id} posts={posts} setEditing={setEditing} />)}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
