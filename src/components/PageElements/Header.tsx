import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import LocalizeLogo from '../../assets/baner-localizepl.png';

function Header(): JSX.Element {
  return (
    <PageElementWrapper>
      <div>IM Header</div>
      <img src={LocalizeLogo} alt="Localize logo" />
    </PageElementWrapper>
  );
}

export default Header;
