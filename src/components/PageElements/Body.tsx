import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import FileReaderInput from './BodyElements/FileReaderInput';
import LocalizeLogo from '../../assets/baner-localizepl.png';

function Body(): JSX.Element {
  return (
    <PageElementWrapper>
      <FileReaderInput />
      <div>IM Body</div>
      <img src={LocalizeLogo} alt="Localize logo" />
    </PageElementWrapper>
  );
}

export default Body;
