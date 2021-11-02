import React, { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, deletePost } from '../actions'

const PostInput = ({
  id, posts, dispatchEditPost, dispatchDeletePost, setEditing,
}) => {
  const [{ title, url, description }] = posts.filter(post => post.id === id)
  const [tempTitle, setTitle] = useState(title)
  const [tempUrl, setUrl] = useState(url)
  const [tempDescription, setDescription] = useState(description)
  const handleEdit = () => {
    dispatchEditPost({
      id, title: tempTitle, url: tempUrl, description: tempDescription,
    })
    console.log(id, tempTitle, tempUrl, tempDescription)
  }

  return (
    <div className="postinput">
      <div>
        <input
          type="text"
          value={tempTitle}
          onChange={e => {
            setTitle(e.target.value)
            console.log(tempTitle)
          }}
        />

      </div>
      <div><input type="text" value={tempUrl} onChange={e => setUrl(e.target.value)} /></div>
      <div><input type="text" value={tempDescription} onChange={e => setDescription(e.target.value)} /></div>
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
})

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: input => dispatch(editPost(input)),
  dispatchDeletePost: input => dispatch(deletePost(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)
