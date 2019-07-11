import React, { useState, ReactNode } from 'react';
import ReportContext, { InitialReportContent } from './ReportContext';
import {
  xmlDataParser,
  assignAttributesToFilesAndTotal,
} from '../../utils/helpers';

const ReportProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [reportContent, setFile] = useState<ReportData>(InitialReportContent);

  /**
   * It's a function that is changing state of report content.
   * @param {ReportData} report transformed data from XML file.
   */
  const updateFile = (report: ReportData): void => {
    setFile(report);
  };

  /**
   * Function is taking xml node with task info data and extract the important data to
   * human readable structure.
   * @param {parseNode} taskInfoNode xml node with project data.
   * @returns {StringObject} extracted information about project.
   */
  const extractTaskInfo = (taskInfoNode: parseNode): StringObject =>
    taskInfoNode.children.reduce((acc: StringObject, data: parseNode) => {
      acc[data.name] = data.attributes.name;
      return acc;
    }, {});

  /**
   * This function is a facade. It's getting a string content of XML file and is changing it into object with report
   * data and separate translation files data, and then setting it in state.
   * @param {string} xmlFileContent previously read data from xml file.
   */
  const transformingParsedXMLIntoObject = (xmlFileContent: string): void => {
    const projectData = xmlDataParser(xmlFileContent).root.children;
    const taskInfo = extractTaskInfo(projectData[0]);
    const fileInfoAndBatch: ReportFileData = assignAttributesToFilesAndTotal(
      projectData,
    );
    const projectObjectData: ReportData = {
      taskInfo: {},
      fileInfoAndBatch: {},
    };
    projectObjectData['taskInfo'] = taskInfo;
    projectObjectData['fileInfoAndBatch'] = fileInfoAndBatch;
    updateFile(projectObjectData);
  };

  return (
    <ReportContext.Provider
      value={{ reportContent, updateFile, transformingParsedXMLIntoObject }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
