const initialState = {
  credentials: {
    userCedula: 'Enzo',
    userPassword: 'enzoeno'
  }
}

const infoUser = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state
    default:
      return state
  }
}

export default infoUser
