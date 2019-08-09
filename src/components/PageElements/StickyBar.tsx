import styled from 'styled-components';
import React, { useContext } from 'react';
import CalcTypeContext from '@Context/CalcTypeContext';

function StickyBar(): JSX.Element {
  const { calcType } = useContext(CalcTypeContext);
  return (
    <StyledStickyBar>
      How many words? {calcType ? '- tłumaczenie' : '- korekta'}
    </StyledStickyBar>
  );
}

const StyledStickyBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem;
  background-color: rgb(96, 125, 139);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  overflow: hidden;
  white-space: nowrap;

  & img {
    height: 3rem;
  }
`;

export default StickyBar;
