import {
  USER
} from '../Constants'

export function createUser (user) {
  return {
    type: USER.CREATE,
    user: user
  }
}

export function loginUser (user) {
  return {
    type: USER.LOGIN,
    user: user
  }
}

export function logoutUser () {
  return {
    type: USER.LOGOUT
  }
}
