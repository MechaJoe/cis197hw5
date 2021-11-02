import React, { useState } from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { editPost, deletePost } from '../actions'

const PostInput = ({
  id, posts, dispatchEditPost, setEditing,
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
        <TextField
          type="text"
          value={tempTitle}
          onChange={e => {
            setTitle(e.target.value)
            console.log(tempTitle)
          }}
        />

      </div>
      <div><TextField type="text" value={tempUrl} onChange={e => setUrl(e.target.value)} /></div>
      <div><TextField type="text" value={tempDescription} onChange={e => setDescription(e.target.value)} /></div>
      <Button
        type="submit"
        variant="contained"
        onClick={() => {
          handleEdit()
          setEditing(false)
        }}
      >
        Submit
      </Button>
      <Button type="button" onClick={() => setEditing(false)}>Cancel</Button>
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
