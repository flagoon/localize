import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import 'core-js/stable';
import ReportProvider from './components/Context/ReportContextProvider';
import GlobalStyle from './themes/globalStyles';

ReactDOM.render(
  <ReportProvider>
    <GlobalStyle />
    <App />
  </ReportProvider>,
  document.getElementById('app'),
);
