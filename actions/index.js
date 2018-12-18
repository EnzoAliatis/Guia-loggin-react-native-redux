import { createApolloFetch } from 'apollo-fetch'

const fetch = createApolloFetch({
  uri: 'http://localhost:3000/graphql'
})

export const failUser = () => {
  return {
    type: 'FAIL_USER'
  }
}

export const requestUser = () => {
  return {
    type: 'REQUEST_USER'
  }
}

const reciveUser = (infoUser) => {
  return {
    type: 'RECIVE_USER',
    payload: infoUser
  }
}

export const fetchUser = (cedula, password) => async dispatch => {
  console.log(cedula)
  console.log(password)
  await dispatch(requestUser())
  let q
  try {
    q = await fetch({ query: `{studentByCedulaPass(cedula:"1310729511", password:"enzoenzo") { fullName, career, cedula, faculty, email, phone, level, itinerary, registrationNumber, typeStudent, vPaid, vGenered, subjects {id name classroom parallel teacherName teacherEmail faults scoreParcials formation days hours}}}` })
  } catch (err) {
    console.log('Error al localizar con el servidor')
    return dispatch(failUser())
  }

  // Aqui validar si la data es vacia o no
  if (q.data.studentByCedulaPass === null) {
    return dispatch(failUser())
  }
  await dispatch(reciveUser(q.data.studentByCedulaPass))
}

const shouldFetchUser = (state) => {
  const infoUser = state.infoUser
  // mas bien comparar si el Id es el mismo
  if (Object.keys(infoUser.data).length === 0) {
    return true
  } else if (infoUser.isFetching) {
    return false
  } else {
    return infoUser.didInvalidate
  }
}

export const fetchUserIfNeeded = (cedula, password) => {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(fetchUser(cedula, password))
    }
  }
}

export const logOut = () => ({
  type: 'LOG_OUT'
})
