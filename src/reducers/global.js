import * as actionType from '../actions/actionType'
import dotProp from 'dot-prop-immutable-chain'

export const initialState = {
  a: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.A:
      return dotProp(state)
        .set('a', action.payload)
        .value()
    default:
      return state
  }
}
