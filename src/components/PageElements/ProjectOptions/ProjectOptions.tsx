import React, { SyntheticEvent, useState, useContext } from 'react';
import FileReaderInput from '../BodyElements/FileReaderInput';
import ReportContext from '../../Context/ReportContext';

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="translation">
            <input
              type="radio"
              name="countingType"
              id="translation"
              value="translation"
              onChange={handleChange}
              checked={formValue.countingType === 'translation' ? true : false}
            />
            <span>Tłumaczenie</span>
          </label>
          <label htmlFor="correction">
            <input
              type="radio"
              name="countingType"
              id="correction"
              value="correction"
              onChange={handleChange}
              checked={formValue.countingType === 'correction' ? true : false}
            />
            <span>Korekta</span>
          </label>
        </div>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="include">
              <input
                type="radio"
                name="fuzzy"
                id="include"
                value="include"
                checked={formValue.fuzzy === 'include' ? true : false}
                onChange={handleChange}
              />
              <span>Internal fuzzy licz jak zwykłe fuzzy</span>
            </label>
            <label htmlFor="noInclude">
              <input
                type="radio"
                name="fuzzy"
                id="noInclude"
                value="noInclude"
                onChange={handleChange}
                checked={formValue.fuzzy === 'noInclude' ? true : false}
              />
              <span>Nie uwzględniaj internal fuzzy</span>
            </label>
          </div>
        </div>
        <div>
          <div>Pokazuj jako:</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="showAsWords">
              <input
                type="radio"
                name="showAs"
                id="showAsWords"
                value="words"
                checked={formValue.showAs === 'words' ? true : false}
                onChange={handleChange}
              />
              <span>Słowa</span>
            </label>
            <label htmlFor="showAsCharacters">
              <input
                type="radio"
                name="showAs"
                id="showAsCharacters"
                value="characters"
                checked={formValue.showAs === 'characters' ? true : false}
                onChange={handleChange}
              />
              <span>Kwoty</span>
            </label>
          </div>
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
        {reportContent.taskInfo.project
          ? reportContent.taskInfo.project
          : 'Test'}
        <table>
          <thead>
            <tr>
              <th>Costam</th>
              <th>Costam2</th>
              <th>Costam3</th>
              <th>Costam4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Costam</td>
              <td>Costam2</td>
              <td>Costam3</td>
              <td>Costam4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectOptions;
