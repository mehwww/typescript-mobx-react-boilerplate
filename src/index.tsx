import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from './bootstrap';
import Root from './Root';
import './index.scss';

bootstrap()
  .then(() => {
    ReactDOM.render(<Root />, document.getElementById('root'));
  });
