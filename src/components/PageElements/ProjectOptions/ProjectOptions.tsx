import React, { SyntheticEvent, useState, useContext } from 'react';
import FileReaderInput from '../BodyElements/FileReaderInput';
import ReportContext from '../../Context/ReportContext';
import CalculationTable from '../Table/Table';
import RadioInput from '../CommonElements/RadioInput';

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
    countingType: 'correction',
    currency: 'PLN',
    fuzzy: 'noInclude',
    pageCharacterCount: 0,
    pageWordCount: 0,
    showAs: 'characters',
    wordCount: 0,
    wordCountValue: 0,
  });

  function handleChange(e: SyntheticEvent<HTMLInputElement>): void {
    console.log('handle');
    const { name, value } = e.currentTarget;
    const newOptions = { ...formValue, [name]: value };
    setFormValue(newOptions);
  }

  const { reportContent } = useContext(ReportContext);
  console.log(reportContent);

  return (
    <div style={{ display: 'flex', border: '1px solid green' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid red',
          width: '30rem',
        }}
      >
        <div>Wyceń analizę:</div>
        <RadioInput
          checked={formValue.countingType}
          inputArray={{ translation: 'Tłumaczenie', correction: 'Korekta' }}
          onChange={handleChange}
          name={'countingType'}
        />
        <div>
          <label htmlFor="currency">
            <div>Wyceń w:</div>
            <input
              name="currency"
              type="text"
              onChange={handleChange}
              value={formValue.currency}
            />
          </label>
        </div>
        <div>
          <div>Ustawienie internal fuzzy:</div>
          <RadioInput
            checked={formValue.fuzzy}
            name="fuzzy"
            inputArray={{
              include: 'Internal fuzzy licz jak zwykłe fuzzy',
              noInclude: 'Nie uwzględniaj internal fuzzy',
            }}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Pokazuj jako:</div>
          <RadioInput
            inputArray={{ showAsWords: 'Słowa', showAsCharacters: 'Kwoty' }}
            onChange={handleChange}
            name="showAs"
            checked={formValue.showAs}
          />
        </div>
        <div>
          <label htmlFor="wordCountValue">
            <div>Stawka za słowo</div>
            <input
              name="wordCountValue"
              type="number"
              onChange={handleChange}
              value={formValue.wordCountValue}
            />
          </label>
        </div>
        <div>
          <label htmlFor="wordCount">
            <div>Dzienna wydajność</div>
            <input
              name="wordCount"
              type="number"
              onChange={handleChange}
              value={formValue.wordCount}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pageWordCount">
            <div>Ilość słów na 1 str.</div>
            <input
              name="pageWordCount"
              type="number"
              onChange={handleChange}
              value={formValue.pageWordCount}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pageCharacterCount">
            <div>Ilość znaków na 1 str.</div>
            <input
              name="pageCharacterCount"
              type="number"
              onChange={handleChange}
              value={formValue.pageCharacterCount}
            />
          </label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => console.log(formValue)}>
            Zapisz opcje do pliku
          </button>
          <button>Zapisz opcje do bazy przeglądarki</button>
          <button>Wczytaj opcje do pliki</button>
        </div>
      </div>
      <div style={{ border: '1px solid yellow', width: '100%' }}>
        <FileReaderInput />
        {reportContent.taskInfo.project ? <CalculationTable /> : 'Test'}
      </div>
    </div>
  );
}

export default ProjectOptions;
