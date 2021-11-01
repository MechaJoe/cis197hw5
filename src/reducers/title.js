const TitleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT_TITLE':
      return {
        url: action.url,
        description: action.description
      }
    default:
      return state
  }
}