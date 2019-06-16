import { createContext } from 'react';
import parse from 'xml-parser';

interface ReportContextInterface {
  file: parse.Document;
  updateFile: (file: parse.Document) => void;
}

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
