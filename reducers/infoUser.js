const initialState = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}

const infoUser = (state = initialState, action) => {
  switch (action.type) {
    case 'FAIL_USER':
      return Object.assign({}, state, {
        didInvalidate: true,
        isFetching: false
      })
    case 'REQUEST_USER':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case 'RECIVE_USER':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.payload
      })
    case 'LOG_OUT':
      return initialState
    default:
      return state
  }
}

export default infoUser
