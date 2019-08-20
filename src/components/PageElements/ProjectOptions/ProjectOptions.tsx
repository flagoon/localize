import React from 'react';

import RadioButton from './RadioButton';

import TextField from '@material-ui/core/TextField';

function ProjectOptions({ handleChange, options }: $TSFixMe): JSX.Element {
  return (
    <>
      <RadioButton
        row={true}
        formValue={options.countingType}
        formLabel="Wyceń analizę"
        handleChange={handleChange}
        name="countingType"
        radioValues={[
          {
            value: 'translation',
            label: 'Tłumaczenie',
            defaultChecked: true,
          },
          {
            value: 'correction',
            label: 'Korekta',
          },
        ]}
      />

      <TextField
        style={{ marginBottom: '1rem' }}
        label="Wyceń w"
        type="text"
        name="currency"
        autoComplete="current-password"
        onChange={handleChange}
        value={options.currency}
      />

      <RadioButton
        formValue={options.fuzzy}
        formLabel="Ustawienie internal fuzzy:"
        handleChange={handleChange}
        name="fuzzy"
        radioValues={[
          {
            value: 'include',
            label: 'Internal fuzzy licz jak zwykłe fuzzy',
            defaultChecked: true,
          },
          {
            value: 'noInclude',
            label: 'Nie uwzględniaj internal fuzzy',
          },
        ]}
      />

      <RadioButton
        row={true}
        formValue={options.showAs}
        formLabel="Pokazuj jako:"
        handleChange={handleChange}
        name="showAs"
        radioValues={[
          {
            value: 'words',
            label: 'Słowa',
            defaultChecked: true,
          },
          {
            value: 'characters',
            label: 'Kwoty',
          },
        ]}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="Stawka za słowo"
        type="number"
        name="wordCountValue"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={options.wordCountValue}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="Dzienna wydajność"
        type="number"
        name="wordCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={options.wordCount}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="Ilość słów na 1 str."
        type="number"
        name="pageWordCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={options.pageWordCount}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="lość znaków na 1 str."
        type="number"
        name="pageCharacterCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={options.pageCharacterCount}
      />
    </>
  );
}

export default ProjectOptions;
