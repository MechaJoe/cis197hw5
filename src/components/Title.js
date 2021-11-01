import React from 'react'

const Title = () => {
  const [editing, setEditing] = React.useState(false)
  return(
  <>
    <h1> Hey this is me! </h1>
    <button onClick={() => dispatchEditTop(text)} > Edit </button>
  </>)
}
export default Title