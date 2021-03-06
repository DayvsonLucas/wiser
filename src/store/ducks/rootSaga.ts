import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from './login/types';
import { load } from './login/saga';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOAD_REQUEST, load),
  ]);
}
