import {
  EVENT
} from '../Constants'

export function create (event) {
  return {
    type: EVENT.CREATE,
    event: event
  }
}
