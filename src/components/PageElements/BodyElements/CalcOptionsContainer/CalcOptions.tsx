import React from 'react';
import FileReaderInput from '../FileReaderInput';

function CalcOptions(): JSX.Element {
  return (
    <div>
      <h2>Ważona liczba słów, oszacowanie terminu</h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          height: '5rem',
        }}
      >
        <div>
          <FileReaderInput />
        </div>
        <div style={{ height: '100%' }}>Ważona liczba słów = //TODO</div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>Szacowany termin realizacji: //TODO dni</div>
          <div>Data realizacji: //TODO</div>
        </div>
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>Kwota = //TODO</div>
          <label htmlFor="currency">
            <div style={{ fontSize: '0.8rem' }}>Wyceniaj w:</div>
            <input
              id="currency"
              style={{
                borderWidth: '0 0 1px 0',
                borderColor: 'black',
              }}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default CalcOptions;
