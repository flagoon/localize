declare module '*.png' {
  const content: string;
  export default content;
}

declare interface ExtractAttributesData {
  [key: string]: parseAttributes;
}

declare interface StringObject {
  [key: string]: string;
}

declare interface AttributesObject {
  perfect: parseAttributes;
  inContextExact: parseAttributes;
  exact: parseAttributes;
  locked: parseAttributes;
  crossFileRepeated: parseAttributes;
  repeated: parseAttributes;
  total: parseAttributes;
  new: parseAttributes;
  newBaseline: parseAttributes;
  newLearnings: parseAttributes;
  fuzzy50: parseAttributes;
  fuzzy75: parseAttributes;
  fuzzy85: parseAttributes;
  fuzzy95: parseAttributes;
}

declare interface ReportContextInterface {
  reportContent: parseDocument;
  updateFile: (reportContent: parseDocument) => void;
  transformingParsedXMLIntoObject: (reportContent: string) => void;
}

declare interface ReportFileData {
  [key: string]: parseAttributes;
}
declare interface ReportData {
  taskInfo: StringObject;
  fileInfoAndBatch: ReportFileData;
}

type Fuzzy = 'include' | 'noInclude';
type CountingType = 'correction' | 'translation';
type ShowAs = 'characters' | 'words';

interface OptionState {
  countingType: CountingType;
  currency: string;
  fuzzy: Fuzzy;
  pageCharacterCount: number;
  pageWordCount: number;
  showAs: ShowAs;
  wordCount: number;
  wordCountValue: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type $TSFixMe = any;

declare type parseNode = parse.Node;
declare type parseDocument = parse.Document;
declare type parseAttributes = parse.Attributes;
declare type parseDeclarations = parse.Declarations;
