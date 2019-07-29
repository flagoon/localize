import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css';
import 'core-js/stable';
import ReportProvider from './components/Context/ReportContextProvider';
import CalcTypeProvider from './components/Context/CalcTypeContextProvider';
import GlobalStyle from './themes/globalStyles';

ReactDOM.render(
  <ReportProvider>
    <GlobalStyle />
    <CalcTypeProvider>
      <App />
    </CalcTypeProvider>
  </ReportProvider>,
  document.getElementById('app'),
);
