import { hot } from 'react-hot-loader/root';
import React, { useContext } from 'react';

import { Body, Footer, Header, StickyBar } from './PageElements';
import CalcTypeContext from './Context/CalcTypeContext';

function App(): JSX.Element {
  const { calcType } = useContext(CalcTypeContext);
  return (
    <>
      <StickyBar>
        How many words{calcType ? ' - tłumaczenie' : ' - korekta'}
      </StickyBar>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default hot(App);
