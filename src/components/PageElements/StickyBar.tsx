import styled from 'styled-components';
import React, { useContext } from 'react';
import ReportContext from '@Context/ReportContext';

function StickyBar(): JSX.Element {
  const { reportContent } = useContext(ReportContext);
  console.log(reportContent);
  return (
    <StyledStickyBar>
      How many words? {reportContent ? '- tłumaczenie' : '- korekta'}
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
  z-index: 100;
`;

export default StickyBar;
