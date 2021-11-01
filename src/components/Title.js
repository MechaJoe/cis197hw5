import React from 'react'
import { connect } from 'react-redux'
import { editTop } from '../actions'

const Title = ({ dispatchEditTop }) => {
  const [editing, setEditing] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [description, setDescription] = React.useState('')
  return (
    <>
      <h1> Hey this is me! </h1>
      <div>
        {!editing && (
        <button type="button" onClick={() => setEditing(true)}>
          {' '}
          Edit
          {' '}
        </button>
        )}
      </div>
      <div>{!editing && url && <img src={url} alt="" width="200px" height="200px" />}</div>
      <div>{!editing && <h2>{description}</h2>}</div>
      <div>
        {editing && (
        <>
          <h3>Edit Intro</h3>
          <p>Image URL</p>
          <input onChange={e => setUrl(e.target.value)} value={url} />
          <p>Description</p>
          <input onChange={e => setDescription(e.target.value)} value={description} />
          <div>
            <button
              type="button"
              onClick={() => {
                setEditing(false)
                dispatchEditTop(url)
              }}
            >
              Submit
            </button>
          </div>
        </>
        )}

      </div>
    </>
  )
}

const mapStateToProps = state => ({
  url: state.url,
  description: state.description,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditTop: input => dispatch(editTop(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Title)
