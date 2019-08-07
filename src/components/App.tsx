import { hot } from 'react-hot-loader/root';
import React from 'react';

import { Body, Footer, Header, StickyBar } from './PageElements';

function App(): JSX.Element {
  return (
    <>
      <StickyBar />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default hot(App);
