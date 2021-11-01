let id = 0

export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const SET_STATUS = 'SET_STATUS'

export const addPost = input => ({
  type: ADD_POST,
  id: id++,
  title: input.title,
  url: input.url,
  description: input.description,
})

export const editPost = input => ({
  type: EDIT_POST,
  id: input.id,
  title: input.title,
  url: input.url,
  description: input.description,
})

export const deletePost = input => ({
  type: DELETE_POST,
  id: input.id,
})

export const editTop = input => ({
  type: 'EDIT_TOP',
  top: input,
})

export const setStatus = status => ({
  type: 'SET_STATUS',
  status,
})
