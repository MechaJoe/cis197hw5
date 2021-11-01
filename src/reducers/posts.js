import { ADD_POST, EDIT_POST, DELETE_POST } from '../actions'

const default_state = []

const PostReducer = (state = default_state, action) => {
  const {
    type, id, title, url, description,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id, title, url, description,
      }]
    case EDIT_POST:
      return state.map(post => {
        if (post.id === id) {
          return {
            ...post, title, url, description,
          }
        }
        return post
      })
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default PostReducer
