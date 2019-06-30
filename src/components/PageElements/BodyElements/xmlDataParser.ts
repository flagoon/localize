import parse from 'xml-parser';

export function xmlDataParser(xmlData: string): parse.Document {
  return parse(xmlData);
}
