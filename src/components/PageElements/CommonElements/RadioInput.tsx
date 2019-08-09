import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface Props {
  inputArray: { [key: string]: string };
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  name: string;
  checked: string;
}

function RadioInput({
  inputArray,
  onChange,
  name,
  checked,
}: Props): JSX.Element {
  const radioInputs = Object.keys(inputArray).map(radioElement => {
    return (
      <label htmlFor={radioElement} key={radioElement}>
        <input
          type="radio"
          onChange={onChange}
          name={name}
          id={radioElement}
          value={radioElement}
          checked={checked === radioElement}
        />
        <span>{inputArray[radioElement]}</span>
      </label>
    );
  });
  return <RadioElementWrapper>{radioInputs}</RadioElementWrapper>;
}

const RadioElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  & label {
    font-size: 1rem;
    cursor: pointer;
  }

  & span {
    padding-left: 0.5rem;
  }
`;

export default RadioInput;
