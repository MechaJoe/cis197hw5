import React from 'react'
import { connect } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { editTop } from '../actions'

const Title = ({ dispatchEditTop }) => {
  const [editing, setEditing] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [description, setDescription] = React.useState('')
  return (
    <>
      <Typography variant="h1"> Hey this is me! </Typography>
      <div>
        {!editing && (
        <Button variant="outlined" type="button" onClick={() => setEditing(true)}>
          {' '}
          Edit
          {' '}
        </Button>
        )}
      </div>
      <div>{!editing && url && <img src={url} alt="https://images.unsplash.com/photo-1630441467753-7e44c0c716fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" width="200px" height="200px" />}</div>
      <div>{!editing && <h2>{description}</h2>}</div>
      <div>
        {editing && (
        <>
          <Typography variant="h3">Edit Intro</Typography>
          <p>Image URL</p>
          <TextField onChange={e => setUrl(e.target.value)} value={url} variant="outlined" />
          <p>Description</p>
          <TextField onChange={e => setDescription(e.target.value)} value={description} variant="outlined" />
          <div>
            <Button
              variant="contained"
              type="button"
              onClick={() => {
                setEditing(false)
                dispatchEditTop(url)
              }}
            >
              Save
            </Button>
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
