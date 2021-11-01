const TitleReducer = (state = {}, action) => {
  const { type, url, description } = action
  switch (type) {
    case 'EDIT_TITLE':
      return {
        url,
        description,
      }
    default:
      return state
  }
}
