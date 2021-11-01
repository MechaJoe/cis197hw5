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
      <div>{!editing && <img src={url} alt="" />}</div>
      <div>{!editing && <p>{description}</p>}</div>
      <div>
        {editing && (
        <>
          <h3>Edit Intro</h3>
          <input onChange={e => setUrl(e.target.value)} value={url} />
          <input onChange={e => setDescription(e.target.value)} value={description} />
          <button
            type="button"
            onClick={() => {
              setEditing(false)
              dispatchEditTop(url)
            }}
          >
            Submit
          </button>
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
