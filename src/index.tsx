import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import App from './routes';
import { GlobalStyle } from './styles/global-style';
import { defaultTheme } from './styles';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root')
);
