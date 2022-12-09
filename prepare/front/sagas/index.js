import { all, fork, call, put, take } from 'redux-saga/effects';

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn() {
  try {
    const result = yield call(logInAPI); // 동기 호출
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI); // 동기 호출
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn() {
  try {
    const result = yield call(logInAPI); // 동기 호출
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI() {
  return axios.post('/api/post');
}

function* addPost() {
  try {
    const result = yield call(addPostAPI); // 동기 호출
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}