import React from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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
            <Typography>{`Post #: ${id}`}</Typography>
          </div>
          <div>
            <Typography variant="h3">{title}</Typography>
          </div>
          <div>
            <Typography variant="body">{description}</Typography>
          </div>
        </>
        <Button type="submit" onClick={e => setEditing(true)} color="secondary">Edit</Button>
        <Button type="button" onClick={() => handleDelete()} color="error">Delete</Button>
      </div>
      )}
      {editing && (<PostInput id={id} posts={posts} setEditing={setEditing} />)}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)
