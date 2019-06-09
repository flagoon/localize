import React, { ChangeEvent } from 'react';
import { FileInput, FileLabel } from './FileReaderInput.styled';

export default function FileReaderInput(): JSX.Element {
  const handleFile = (file: string): void => {
    console.log(file);
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
    </>
  );
}
