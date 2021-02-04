import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getUserInfoInSessionStorage, PARAM_TOKEN } from '../utils';
import { userActions } from '../domain/User';
import * as Pages from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function Routes(): ReactElement {
  const dispatch = useDispatch();

  const token = getUserInfoInSessionStorage(PARAM_TOKEN);

  useEffect(() => {
    if (token) {
      dispatch(userActions.requestMe());
    }
  }, []);

  // TODO
  // 경로를 text에서 객체로 변경하자.
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/login" component={Pages.LoginPage} />
        <Route component={Pages.PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
