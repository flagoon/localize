import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import FileReaderInput from './BodyElements/FileReaderInput';

function Body(): JSX.Element {
  return (
    <PageElementWrapper>
      <FileReaderInput />
      <div>IM Body</div>
    </PageElementWrapper>
  );
}

export default Body;
