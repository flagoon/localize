import { createContext } from 'react';
import parse from 'xml-parser';

export const InitialReportFile: parse.Document = {
  root: {
    attributes: { name: '' },
    children: [],
    content: '',
    name: '',
  },
  declaration: { attributes: { name: 'analyse' } },
};

let ReportContext = createContext<ReportContextInterface>({
  file: InitialReportFile,
  updateFile: () => {},
});

export default ReportContext;
