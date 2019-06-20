import React, { useState, ReactNode } from 'react';
import ReportContext, { InitialReportFile } from './ReportContext';
import parse from 'xml-parser';
import {} from './ReportContext';

const ReportProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [file, setFile] = useState<parse.Document>(InitialReportFile);

  const updateFile = (xmlFile: parse.Document): void => {
    setFile(xmlFile);
  };

  return (
    <ReportContext.Provider value={{ file, updateFile }}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
