import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userSelector } from '../domain/User';
import { getUserInfoInSessionStorage, PARAM_TOKEN } from '../utils';
import { RootState } from '../store';

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
  path: string;
  exact?: boolean;
}

function PrivateRoute({ component, path, exact = false }: PrivateRouteProps): JSX.Element {
  const isLoggedIn = useSelector((state: RootState) => userSelector.isLoggedIn(state));

  const token = getUserInfoInSessionStorage(PARAM_TOKEN);

  if (!isLoggedIn || !token) {
    return <Redirect to="/" />;
  }

  return <Route path={path} exact={exact} component={component} />;
}
export default PrivateRoute;
