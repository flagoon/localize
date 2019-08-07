import React, { SyntheticEvent, useState } from 'react';

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

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid red',
        }}
      >
        Wyceń element:
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
            Tłumaczenie
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
            Korekta
          </label>
        </div>
        <div>
          <label htmlFor="currency">
            Wyceń w:
            <input
              name="currency"
              type="text"
              onChange={handleChange}
              value={formValue.currency}
            />
          </label>
        </div>
        <div>
          Ustawienie internal fuzzy:
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
              Internal fuzzy licz jak zwykłe fuzzy
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
              Nie uwzględniaj internal fuzzy
            </label>
          </div>
        </div>
        <div>
          Pokazuj jako:
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
              Słowa
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
              Kwoty
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="wordCountValue">
            Stawka za słowo
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
            Dzienna wydajność
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
            Ilość słów na 1 str.
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
            Ilość znaków na 1 str.
            <input
              name="pageCharacterCount"
              type="number"
              onChange={handleChange}
              value={formValue.pageCharacterCount}
            />
          </label>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={() => console.log(formValue)}>
          Zapisz opcje do pliku
        </button>
        <button>Zapisz opcje do bazy przeglądarki</button>
        <button>Wczytaj opcje do pliki</button>
      </div>
    </>
  );
}

export default ProjectOptions;
