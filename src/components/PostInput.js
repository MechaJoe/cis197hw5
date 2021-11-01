import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'

const PostInput = ({
  id, title, url, description, dispatchEditPost, dispatchDeletePost, setEditing,
}) => {
  const [tempTitle, setTitle] = useState(title)
  const [tempUrl, setUrl] = useState(url)
  const [tempDescription, setDescription] = useState(description)
  const handleEdit = () => {
    dispatchEditPost({
      id, tempTitle, tempUrl, tempDescription,
    })
    console.log(id, tempTitle, tempUrl, tempDescription)
  }

  return (
    <div className="postinput">
      <div><input type="text" value={title} onChange={e => setTitle(e.target.value)} /></div>
      <div><input type="text" value={url} onChange={e => setUrl(e.target.value)} /></div>
      <div><input type="text" value={description} onChange={e => setDescription(e.target.value)} /></div>
      <button
        type="submit"
        onClick={() => {
          handleEdit()
          setEditing(false)
        }}
      >
        Submit
      </button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)
