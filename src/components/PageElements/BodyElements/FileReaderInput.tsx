import React, { ChangeEvent, useContext } from 'react';
import { FileInput, FileLabel } from './FileReaderInput.styled';

import { xmlDataExtractor } from './xmlDataExtractor';
import ReportContext from '../../Context/ReportContext';

export default function FileReaderInput(): JSX.Element {
  const { updateFile, file } = useContext(ReportContext);

  const handleFile = (file: string): void => {
    updateFile(xmlDataExtractor(file));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileReader: FileReader = new FileReader();
    let file: Blob = new Blob();
    if (e.target.files) {
      file = e.target.files[0];
    }
    fileReader.onload = () => {
      handleFile(fileReader.result as string);
    };
    fileReader.readAsText(file);
  };

  return (
    <>
      <FileInput
        type="file"
        id="fileHandler"
        name="fileHandler"
        accept=".xml"
        onChange={handleChange}
      />
      <FileLabel htmlFor="fileHandler">Dodaj plik raportu</FileLabel>
      <textarea value={JSON.stringify(file)} />
    </>
  );
}
