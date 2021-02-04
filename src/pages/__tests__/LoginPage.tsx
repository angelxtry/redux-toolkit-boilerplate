import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../../store';
import { LoginPage } from '../LoginPage';

test('render LoginPage', () => {
  const { debug } = render(
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
  debug();
});
