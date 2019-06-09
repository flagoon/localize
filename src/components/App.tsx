import { hot } from 'react-hot-loader/root';
import React from 'react';

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

export default hot(App);
