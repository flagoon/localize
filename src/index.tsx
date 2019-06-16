import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import 'core-js/stable';
import ReportProvider from './components/Context/ReportContextProvider';

ReactDOM.render(
  <ReportProvider>
    <App />
  </ReportProvider>,
  document.getElementById('app'),
);
