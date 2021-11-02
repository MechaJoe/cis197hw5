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
      id, tempTitle, tempUrl, tempDescription,
    })
    console.log(id, tempTitle, tempUrl, tempDescription)
  }

  return (
    <div className="postinput">
      <div>
        <input
          type="text"
          value={title}
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
  // status: state.status,
  // title: state.title,
  // url: state.url,
  // description: state.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: input => dispatch(editPost(input)),
  dispatchDeletePost: input => dispatch(deletePost(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostInput)
