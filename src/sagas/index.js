/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { fork, all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([fork(() => {})])
}
