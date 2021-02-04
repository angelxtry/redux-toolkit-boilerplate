import { fork, take, select, put, call, ForkEffect } from 'redux-saga/effects';
import { SESSION_STORAGE_KEY } from '../../utils/constant';
import * as Api from '../../api';
import { userActions, userSelector } from './userSlice';
import { LoginRequestPayload, UserResponse } from './types';

function* loginWorkflow() {
  while (true) {
    const auth: boolean = yield select(userSelector.isLoggedIn);
    let waitLogin = !auth;

    while (waitLogin) {
      try {
        const { payload }: LoginRequestPayload = yield take(userActions.requestLogin);
        const result: UserResponse = yield call(Api.requestMe);

        waitLogin = false;

        const { token } = result;
        if (!token) {
          yield put(userActions.failLogin('다시 로그인해주세요.'));
          return;
        }

        sessionStorage.setItem(
          SESSION_STORAGE_KEY,
          JSON.stringify({
            token: result.token,
            name: result.name,
            id: result.id,
          })
        );

        yield put(userActions.successLogin({ ...result }));
      } catch (e) {
        if (e instanceof Api.ApiError) {
          if (e.statusCode.toString().startsWith('4')) {
            yield put(userActions.failLogin('이메일, 비밀번호를 확인해주세요.'));
          } else {
            yield put(userActions.failLogin('서버에 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.'));
          }
          // console.error('LOGIN ERROR', e);
        } else {
          // console.error(e);
        }
      }
    }

    yield take(userActions.requestLogout);

    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  }
}

function* meWorkflow() {
  while (true) {
    try {
      yield take(userActions.requestMe);
      const result: UserResponse = yield call(Api.requestMe);
      yield put(userActions.successMe(result));
    } catch (e) {
      yield put(userActions.failLogin('오류가 발생했습니다.'));
    }
  }
}

export function* loginSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(loginWorkflow);
  yield fork(meWorkflow);
}
