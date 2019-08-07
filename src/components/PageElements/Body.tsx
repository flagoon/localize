import React from 'react';
import Grid from '@material-ui/core/Grid';

import CalculationTable from './Table/Table';
import { PageElementWrapper } from './PageElement.styled';
import { ProjectOptions } from './ProjectOptions';

function Body(): JSX.Element {
  return (
    <PageElementWrapper>
      <Grid container direction="row" spacing={2}>
        <ProjectOptions />
        <CalculationTable />
      </Grid>
    </PageElementWrapper>
  );
}

export default Body;
