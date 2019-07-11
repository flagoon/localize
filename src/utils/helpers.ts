import parse from 'xml-parser';

/**
 * Transforming string data into xml object.
 * @param {string} xmlData data provided by FileReader.
 */
const xmlDataParser = (xmlData: string): parse.Document => parse(xmlData);

/**
 * Report can contain reports from multiple files. This function is iterating over each file data, and creating proper object.
 * @param {parseNode[]} children list of parsed xml elements.
 * @returns {ExtractAttributesData} projectsAttributesData it contains name of parameter and it's attributes.
 */
const transformReportDataFromFileToObject = (
  children: parseNode[],
): ExtractAttributesData =>
  children.reduce((acc: ExtractAttributesData, child: parseNode) => {
    const { name, attributes } = child;
    if (!name.toLowerCase().includes('fuzzy')) {
      acc[name] = attributes;
    } else {
      acc[`${name}` + attributes['min']] = attributes;
    }
    return acc;
  }, {});

/**
 * Each report has one or more translation files, and batch total, which is containing all data from all
 * translation files. This function is creating object which keys are file names and value is attributes for
 * this file.
 * @param {parseNode[]} fileData it's data for given translated file in report.
 * @returns {ReportFileData} object that is reduced from array of translation files.
 */
const assignAttributesToFilesAndTotal = (
  fileData: parseNode[],
): ReportFileData =>
  fileData.reduce((acc: parseNode, data) => {
    if (data.name !== 'taskInfo' && data.name !== 'batchTotal') {
      acc[data.attributes['name']] = transformReportDataFromFileToObject(
        data.children[0].children,
      );
    } else if (data.name === 'batchTotal') {
      acc['batchTotal'] = transformReportDataFromFileToObject(
        data.children[0].children,
      );
    }
    return acc;
  }, {});

export {
  assignAttributesToFilesAndTotal,
  transformReportDataFromFileToObject,
  xmlDataParser,
};
