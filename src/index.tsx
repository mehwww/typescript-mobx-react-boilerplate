import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'mobx-react';
import defaultTheme from '@/utils/default-theme';
import { rootStore, history } from '@/store';
import bootstrap from './bootstrap';
import Root from './Root';
import './index.scss';

const render = (App: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Router history={history}>
        <Provider {...rootStore} >
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );
};

bootstrap()
  .then(() => {
    render(Root);
  });

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept(() => {
    render(Root);
  });
}
