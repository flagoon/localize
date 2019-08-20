import React, { ChangeEvent, useContext, Dispatch } from 'react';
import { FileInput, FileLabel } from './FileReaderInput.styled';
import ReportContext from '../../Context/ReportContext';

export default function FileReaderInput({
  toggleIsShown,
}: {
  toggleIsShown: Dispatch<boolean>;
}): JSX.Element {
  const { transformingParsedXMLIntoObject } = useContext(ReportContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileReader: FileReader = new FileReader();
    let file: Blob = new Blob();
    if (e.target.files) {
      file = e.target.files[0];
    }
    fileReader.onload = () => {
      transformingParsedXMLIntoObject(fileReader.result as string);
    };
    fileReader.readAsText(file);
    toggleIsShown(true);
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
    </>
  );
}
