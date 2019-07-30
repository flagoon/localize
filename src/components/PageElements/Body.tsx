import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import CalcOptions from './BodyElements/CalcOptionsContainer/CalcOptions';

function Body(): JSX.Element {
  return (
    <PageElementWrapper>
      <CalcOptions />
    </PageElementWrapper>
  );
}

export default Body;
