import React, { ChangeEvent } from 'react';
import parse from 'xml-parser';
import { FileInput, FileLabel } from './FileReaderInput.styled';
import { xmlDataParser } from './xmlDataParser';

export default function FileReaderInput(): JSX.Element {
  function findInXmlObject(
    requiredChildName: string,
    children: parse.Node[],
  ): parse.Node {
    const requiredChild = children.filter(
      child => child.name === requiredChildName,
    );
    return requiredChild[0];
  }

  const extractFormData = (xmlObject: parse.Document): void => {
    const taskInfoData = findInXmlObject('taskInfo', xmlObject.root.children);
    const batchTotalData = findInXmlObject(
      'batchTotal',
      xmlObject.root.children,
    );
    const taskInfoObject: { [key: string]: string } = {};
    taskInfoData.children.forEach(data => {
      if (data['name'] !== 'settings') {
        taskInfoObject[data['name']] = data.attributes.name;
      }
    });
    console.log(taskInfoObject);
    console.log('taskInfoData', taskInfoData);
    console.log(batchTotalData.children[0]);
  };

  const handleFile = (file: string): void => {
    extractFormData(xmlDataParser(file));
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
