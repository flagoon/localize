import parse from 'xml-parser';

export function xmlDataExtractor(xmlData: string): parse.Document {
  return parse(xmlData);

type PickedParseNode = Pick<parse.Node, 'name' | 'content'>;

/**
 * Map()
 */
export function recursiveDataExtractor(
  data: parse.Node,
): PickedParseNode | parse.Node {
  const { children, name, content } = data;
  if (children && children.length > 0) {
    return { [name]: recursiveDataExtractor };
  } else {
    return { [name]: content };
  }
}

export function xmlDataExtractor(xmlData: string): void {
  const objParsedFromXML = parse(xmlData);
  const { root } = objParsedFromXML;
  const data = recursiveDataExtractor(root);
  console.log(data);
}
