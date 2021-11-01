import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

const AddPostInput = ({ dispatchAddPost, setAddingPost }) => {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div>
      <>
        <h3>Edit Post</h3>
        <p>Title</p>
        <input onChange={e => setTitle(e.target.value)} value={title} />
        <p>Image URL</p>
        <input onChange={e => setUrl(e.target.value)} value={url} />
        <p>Description</p>
        <input onChange={e => setDescription(e.target.value)} value={description} />
        <div>
          <button
            type="button"
            onClick={() => {
              setAddingPost(false)
              dispatchAddPost({ title, url, description })
            }}
          >
            Submit
          </button>
        </div>
      </>

    </div>
  )
}

const mapStateToProps = state => ({
  title: state.title,
  url: state.url,
  description: state.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: input => dispatch(addPost(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPostInput)
