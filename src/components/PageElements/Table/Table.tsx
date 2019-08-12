import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ReportContext from '@Context/ReportContext';
import FileReaderInput from '../BodyElements/FileReaderInput';

function CalculationTable(): JSX.Element | null {
  const { reportContent } = useContext(ReportContext);
  const ProjectTable = (
    <table>
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Liczba słów</th>
          <th>Waga</th>
          <th>Kwota</th>
        </tr>
      </thead>
      <tbody>
        <TableRow rowFor="perfect" name="Perfect" />
        <TableRow rowFor="inContextExact" name="Context match" />
        <TableRow rowFor="exact" name="Exact" />
        <TableRow rowFor="locked" name="Locked" />
        <TableRow rowFor="repeated" name="Repeated" />
        <TableRow rowFor="new" name="New" />
        <TableRow rowFor="fuzzy50" name="Fuzzy 50-74%" />
        <TableRow rowFor="fuzzy75" name="Fuzzy 75-84%" />
        <TableRow rowFor="fuzzy85" name="Fuzzy 85-94%" />
        <TableRow rowFor="fuzzy95" name="Fuzzy 95-99%" />
        <TableRow rowFor="total" name="Total" />
      </tbody>
    </table>
  );
  return (
    <Grid item xs={12} sm={6} md={8}>
      <FileReaderInput />
      {reportContent.taskInfo.project ? ProjectTable : null}
    </Grid>
  );
}
// TODO: fix interface
function TableRow({ rowFor, name }: $TSFixMe): JSX.Element {
  const { reportContent } = useContext(ReportContext);
  const { fileInfoAndBatch } = reportContent;
  return (
    <tr>
      <td>{name}:</td>
      <td style={{ textAlign: 'right' }}>
        {fileInfoAndBatch.batchTotal[rowFor].words}
      </td>
      <td style={{ textAlign: 'center' }}>
        <input
          name="test"
          type="number"
          onChange={e => console.log(e.target.value)}
          style={{ width: '5rem' }}
        />
        %
      </td>
      <td>Kwota</td>
    </tr>
  );
}

export default CalculationTable;
