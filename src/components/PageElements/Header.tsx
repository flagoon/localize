import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import LocalizeLogo from '../../assets/baner-localizepl.png';
import StyledOutsideLink from './CommonElements/OutsideLink';

function Header(): JSX.Element {
  return (
    <PageElementWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledOutsideLink address="https://localize.pl">
          <img src={LocalizeLogo} alt="Localize logo" />
        </StyledOutsideLink>
        <StyledOutsideLink
          address="https://localize.pl/faq"
          className="faq-link"
        >
          FAQ
        </StyledOutsideLink>
      </div>
    </PageElementWrapper>
  );
}

export default Header;
