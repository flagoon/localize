import React, { useContext } from 'react';
import { CalcTypeWrapper, CalcTypeName } from './CalcTypeForm.styled';
import CalcTypeContext from '../../Context/CalcTypeContext';

function CalcTypeForm(): JSX.Element {
  const { updateCalcType } = useContext(CalcTypeContext);
  return (
    <CalcTypeWrapper>
      <CalcTypeName>Wyceń</CalcTypeName>
      <label htmlFor="calcType">
        <input
          type="radio"
          name="calcType"
          id="calcType"
          defaultChecked
          onChange={updateCalcType}
        />
        Tłumaczenie
      </label>
      <label htmlFor="calcType2">
        <input
          type="radio"
          name="calcType"
          id="calcType2"
          onChange={updateCalcType}
        />
        Weryfikację/Korektę
      </label>
    </CalcTypeWrapper>
  );
}

export default CalcTypeForm;
