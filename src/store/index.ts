import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import { ENV_CONSTANT } from '../utils/constant';
import { userReducer, loginSaga } from '../domain/User';

export const rootReducer = combineReducers({
  userReducer,
});

const sagaMiddleware = createSagaMiddleware();
export function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<void>, void, unknown>>, void, unknown> {
  yield all([loginSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.TARGET_ENV !== ENV_CONSTANT.PRODUCTION,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = createStore();

export default store;
