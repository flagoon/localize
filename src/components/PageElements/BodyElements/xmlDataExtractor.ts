import parse from 'xml-parser';

export function xmlDataExtractor(xmlData: string): parse.Document {
  return parse(xmlData);
}
