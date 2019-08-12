import React, { ChangeEvent } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';

export interface Props extends RadioGroupProps {
  formLabel: string;
  formValue: string;
  name: string;
  radioValues: RadioValue[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioValue {
  value: string;
  label: string;
  defaultChecked?: boolean;
}

function RadioButton(props: Props): JSX.Element {
  return (
    <FormControl style={{ margin: '1rem 0 0' }}>
      <FormLabel component="legend">{props.formLabel}</FormLabel>
      <RadioGroup value={props.formValue} row={props.row}>
        {props.radioValues.map((radioValue: RadioValue) => (
          <FormControlLabel
            key={radioValue.value}
            value={radioValue.value}
            control={
              <Radio
                name={props.name}
                onChange={props.handleChange}
                color="primary"
              />
            }
            label={radioValue.label}
            defaultChecked={radioValue.defaultChecked}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButton;
