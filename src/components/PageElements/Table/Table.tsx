import React, { useContext, useState, ChangeEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import ReportContext from '@Context/ReportContext';
import FileReaderInput from '../BodyElements/FileReaderInput';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

function CalculationTable(): JSX.Element | null {
  const { reportContent } = useContext(ReportContext);

  interface TableInputs {
    perfect: string;
    inContextExact: string;
    exact: string;
    locked: string;
    repeated: string;
    new: string;
    fuzzy50: string;
    fuzzy75: string;
    fuzzy85: string;
    fuzzy95: string;
    total: string;
  }

  const tableInput: TableInputs = {
    perfect: '',
    inContextExact: '',
    exact: '',
    locked: '',
    repeated: '',
    new: '',
    fuzzy50: '',
    fuzzy75: '',
    fuzzy85: '',
    fuzzy95: '',
    total: '',
  };

  const [cellValue, setCellValue] = useState<TableInputs>(tableInput);

  const setValue = (value: string, cellName: keyof TableInputs): void => {
    const testValue = Number(value);
    const newValue = isNaN(testValue) ? cellValue[cellName] : Number(testValue);
    setCellValue({ ...cellValue, [cellName]: newValue });
  };

  const ProjectTable = (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Nazwa</TableCell>
          <TableCell>Liczba słów</TableCell>
          <TableCell>Waga</TableCell>
          <TableCell>Kwota</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.perfect}
          rowFor="perfect"
          name="Perfect"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.inContextExact}
          rowFor="inContextExact"
          name="Context match"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.exact}
          rowFor="exact"
          name="Exact"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.locked}
          rowFor="locked"
          name="Locked"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.repeated}
          rowFor="repeated"
          name="Repeated"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.new}
          rowFor="new"
          name="New"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.fuzzy50}
          rowFor="fuzzy50"
          name="Fuzzy 50-74%"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.fuzzy75}
          rowFor="fuzzy75"
          name="Fuzzy 75-84%"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.fuzzy85}
          rowFor="fuzzy85"
          name="Fuzzy 85-94%"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.fuzzy95}
          rowFor="fuzzy95"
          name="Fuzzy 95-99%"
        />
        <TableRows
          onChangeHandler={setValue}
          cellValue={cellValue.total}
          rowFor="total"
          name="Total"
        />
      </TableBody>
    </Table>
  );
  return (
    <Grid item xs={12} sm={6} md={8}>
      <FileReaderInput />
      {reportContent.taskInfo.project ? ProjectTable : null}
    </Grid>
  );
}
// TODO: fix interface
function TableRows({
  rowFor,
  name,
  cellValue,
  onChangeHandler,
}: $TSFixMe): JSX.Element {
  const { reportContent } = useContext(ReportContext);
  const { fileInfoAndBatch } = reportContent;

  const updatePercents = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    onChangeHandler(value, name);
  };

  return (
    <TableRow>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        {fileInfoAndBatch.batchTotal[rowFor].words}
      </TableCell>
      {rowFor !== 'total' ? (
        <>
          <TableCell>
            <FormControl>
              <TextField
                error={cellValue > 100 || cellValue < 0}
                helperText={
                  cellValue > 100 || cellValue < 0
                    ? 'Wartość musi mieścić się w przedziale od 0-100'
                    : ''
                }
                name={rowFor}
                onChange={updatePercents}
                style={{ width: '20rem' }}
                placeholder={'0-100%'}
                value={cellValue}
              />
            </FormControl>
          </TableCell>
          <TableCell align="right" style={{ width: '5rem' }}>
            {(cellValue * fileInfoAndBatch.batchTotal[rowFor].words) / 100}
          </TableCell>
        </>
      ) : null}
    </TableRow>
  );
}

export default CalculationTable;
