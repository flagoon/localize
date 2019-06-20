import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Body, Footer, Header } from './PageElements';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default hot(App);
