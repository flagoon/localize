import React from 'react';
import { PageElementWrapper } from './PageElement.styled';
import ProjectOptions from './ProjectOptions/ProjectOptions';

function Body(): JSX.Element {
  return (
    <PageElementWrapper>
      <ProjectOptions />
    </PageElementWrapper>
  );
}

export default Body;
