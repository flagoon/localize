import React, { useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';

import CalculationTable from './Table/Table';
import { PageElementWrapper } from './PageElement.styled';
import { ProjectOptions, SaveButtons } from './ProjectOptions';

const initialProjectOptions: OptionState = {
  countingType: 'translation',
  currency: 'PLN',
  fuzzy: 'include',
  pageCharacterCount: 0,
  pageWordCount: 0,
  showAs: 'words',
  wordCount: 0,
  wordCountValue: 0,
};

const initialTableData: AttributesObject = {
  perfect: 0,
  inContextExact: 0,
  exact: 0,
  locked: 0,
  crossFileRepeated: 0,
  repeated: 0,
  total: 0,
  new: 0,
  newBaseline: 0,
  newLearnings: 0,
  fuzzy50: 0,
  fuzzy75: 0,
  fuzzy85: 0,
  fuzzy95: 0,
};

function Body(): JSX.Element {
  const [projectOptions, setProjectOptions] = useState<OptionState>(
    initialProjectOptions,
  );
  const [tableData, setTableData] = useState<AttributesObject>(
    initialTableData,
  );

  const handleProjectOptionsChange = (
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = e.currentTarget;
    const newOptions = { ...projectOptions, [name]: value };
    setProjectOptions(newOptions);
  };

  const setTableValue = (
    value: string,
    cellName: keyof AttributesObject,
  ): void => {
    const numericValue = Number(value);
    const newValue = isNaN(numericValue) ? tableData[cellName] : numericValue;
    setTableData({ ...tableData, [cellName]: newValue });
  };

  return (
    <PageElementWrapper>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={4} sm={6} container direction="column">
          <ProjectOptions
            handleChange={handleProjectOptionsChange}
            options={projectOptions}
          />
          <SaveButtons />
        </Grid>
        <CalculationTable
          tableValues={tableData}
          handleChange={setTableValue}
        />
      </Grid>
    </PageElementWrapper>
  );
}

export default Body;
