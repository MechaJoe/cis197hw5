import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const TitleInput = ({ dispatchAddToDo }) => {
  const [text, setText] = useState('')

  return (
    <>
      <input onChange={e => setText(e.target.value)} />
      <button type="button" onSubmit={() => dispatchEdit(text)}> Save </button>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddToDo: input => dispatch(addTodo(input)),
})

export default connect(null, mapDispatchToProps)(TitleInput)
