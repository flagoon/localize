import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { setOptions, getOptions } from '@Utils/localStorage';

function SaveButtons({ options }: { options: $TSFixMe }): JSX.Element {
  const saveOptionsInLocalStorage = (): void => {
    setOptions(options);
  };

  const getOptionsFromLocalStorage = (): void => {
    console.log(JSON.stringify(getOptions()));
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={saveOptionsInLocalStorage}
        >
          Zapisz opcje do pliku
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={getOptionsFromLocalStorage}
        >
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
