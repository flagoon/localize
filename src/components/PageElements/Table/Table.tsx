import React, { useContext, ChangeEvent, useState } from 'react';
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

function CalculationTable({
  tableValues,
  handleChange,
}: {
  tableValues: AttributesObject;
  handleChange: (value: string, cellName: keyof AttributesObject) => void;
}): JSX.Element | null {
  const [isShown, toggleIsShown] = useState<$TSFixMe>(false);

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
          onChangeHandler={handleChange}
          cellValue={tableValues.perfect}
          rowFor="perfect"
          name="Perfect"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.inContextExact}
          rowFor="inContextExact"
          name="Context match"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.exact}
          rowFor="exact"
          name="Exact"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.locked}
          rowFor="locked"
          name="Locked"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.repeated}
          rowFor="repeated"
          name="Repeated"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.new}
          rowFor="new"
          name="New"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy50}
          rowFor="fuzzy50"
          name="Fuzzy 50-74%"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy75}
          rowFor="fuzzy75"
          name="Fuzzy 75-84%"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy85}
          rowFor="fuzzy85"
          name="Fuzzy 85-94%"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy95}
          rowFor="fuzzy95"
          name="Fuzzy 95-99%"
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.total}
          rowFor="total"
          name="Total"
        />
      </TableBody>
    </Table>
  );
  return (
    <Grid item xs={12} sm={6} md={8}>
      <FileReaderInput toggleIsShown={toggleIsShown} />
      {isShown ? ProjectTable : null}
    </Grid>
  );
}

interface TableRowsProps {
  rowFor: keyof AttributesObject;
  name: string;
  cellValue: number;
  onChangeHandler: (value: string, cellName: keyof AttributesObject) => void;
}

function TableRows({
  rowFor,
  name,
  cellValue,
  onChangeHandler,
}: TableRowsProps): JSX.Element {
  const { reportContent } = useContext(ReportContext);
  const { fileInfoAndBatch } = reportContent;

  const updatePercents = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    onChangeHandler(value, name as keyof AttributesObject);
  };

  const numberOfWords =
    fileInfoAndBatch && fileInfoAndBatch.batchTotal
      ? fileInfoAndBatch.batchTotal[rowFor].words
      : 0;

  return (
    <TableRow>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">
        {numberOfWords ? fileInfoAndBatch.batchTotal[rowFor].words : ''}
      </TableCell>
      {rowFor !== 'total' ? (
        <>
          <TableCell>
            <FormControl>
              <TextField
                error={cellValue > 100 || cellValue < 0}
                helperText={
                  cellValue > 100 || cellValue < 0
                    ? 'Podana liczba powinna być z przedziału 0-100.'
                    : null
                }
                name={rowFor}
                onChange={updatePercents}
                style={{
                  width: cellValue > 100 || cellValue < 0 ? '10rem' : '5rem',
                  textAlign: 'right',
                }}
                placeholder={'0-100%'}
                value={cellValue}
              />
            </FormControl>
          </TableCell>
          <TableCell align="right" style={{ width: '5rem' }}>
            {numberOfWords
              ? (cellValue * fileInfoAndBatch.batchTotal[rowFor].words) / 100
              : 0}
          </TableCell>
        </>
      ) : null}
    </TableRow>
  );
}

export default CalculationTable;
