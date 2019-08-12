import React, { useState, ChangeEvent } from 'react';

import RadioButton from './RadioButton';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

type Fuzzy = 'include' | 'noInclude';
type CountingType = 'correction' | 'translation';
type ShowAs = 'characters' | 'words';

interface State {
  countingType: CountingType;
  currency: string;
  fuzzy: Fuzzy;
  pageCharacterCount: number;
  pageWordCount: number;
  showAs: ShowAs;
  wordCount: number;
  wordCountValue: number;
}

function ProjectOptions(): JSX.Element {
  const [formValue, setFormValue] = useState<State>({
    countingType: 'translation',
    currency: 'PLN',
    fuzzy: 'include',
    pageCharacterCount: 0,
    pageWordCount: 0,
    showAs: 'words',
    wordCount: 0,
    wordCountValue: 0,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.currentTarget;
    const newOptions = { ...formValue, [name]: value };
    setFormValue(newOptions);
  }

  return (
    <Grid item xs={12} md={4} sm={6} container direction="column">
      <RadioButton
        row={true}
        formValue={formValue.countingType}
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
        value={formValue.currency}
      />

      <RadioButton
        formValue={formValue.fuzzy}
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
        formValue={formValue.showAs}
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
        value={formValue.wordCountValue}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="Dzienna wydajność"
        type="number"
        name="wordCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={formValue.wordCount}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="Ilość słów na 1 str."
        type="number"
        name="pageWordCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={formValue.pageWordCount}
      />
      <TextField
        style={{ marginBottom: '1rem' }}
        label="lość znaków na 1 str."
        type="number"
        name="pageCharacterCount"
        inputProps={{ min: '0', step: '1' }}
        onChange={handleChange}
        value={formValue.pageCharacterCount}
      />

      <Grid container direction="row">
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => console.log(formValue)}
          >
            Zapisz opcje do pliku
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">
            Zapisz w przeglądarce
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary">
            Wczytaj opcje z pliku
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProjectOptions;
