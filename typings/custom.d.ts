declare module '*.png' {
  const content: string;
  export default content;
}

declare interface ReportContextInterface {
  file: parse.Document;
  updateFile: (file: parse.Document) => void;
}
