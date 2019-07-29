import React from 'react';
import styled from 'styled-components';

const OutsideLink = (props: {
  address: string;
  children: JSX.Element | string;
  className?: string;
}): JSX.Element => {
  const { address, className, children } = props;
  return (
    <a
      href={address}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

const StyledOutsideLink = styled(OutsideLink)`
  &.faq-link {
    color: red;
    font-size: 3rem;

    &::after {
      content: ' >>';
    }
  }
`;

export default StyledOutsideLink;
