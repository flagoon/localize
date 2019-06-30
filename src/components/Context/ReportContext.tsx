import { createContext } from 'react';

export const InitialReportContent: ReportData = {
  taskInfo: {},
  fileInfoAndBatch: {},
};

const ReportContext = createContext<ReportContextInterface>({
  reportContent: InitialReportContent,
  updateFile: () => {},
  transformingParsedXMLIntoObject: () => {},

export default ReportContext;
