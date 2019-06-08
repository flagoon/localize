import React from 'react';
import { hot } from 'react-hot-loader';

import { Body, Footer, Header } from './PageElements';

function App(): JSX.Element {
  return (
    <>
      <Footer />
      <Body />
      <Header />
    </>
  );
}

export default hot(module)(App);
