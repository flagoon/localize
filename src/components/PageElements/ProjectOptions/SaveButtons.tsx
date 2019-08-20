import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function SaveButtons(): JSX.Element {
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => console.log('formValue')}
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
  );
}

export default SaveButtons;
