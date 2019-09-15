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
  showAs,
}: {
  tableValues: AttributesObject;
  handleChange: (value: string, cellName: keyof AttributesObject) => void;
  showAs: string;
}): JSX.Element | null {
  const [isShown, toggleIsShown] = useState<boolean>(false);

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
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.inContextExact}
          rowFor="inContextExact"
          name="Context match"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.exact}
          rowFor="exact"
          name="Exact"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.locked}
          rowFor="locked"
          name="Locked"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.repeated}
          rowFor="repeated"
          name="Repeated"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.new}
          rowFor="new"
          name="New"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy50}
          rowFor="fuzzy50"
          name="Fuzzy 50-74%"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy75}
          rowFor="fuzzy75"
          name="Fuzzy 75-84%"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy85}
          rowFor="fuzzy85"
          name="Fuzzy 85-94%"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.fuzzy95}
          rowFor="fuzzy95"
          name="Fuzzy 95-99%"
          showAs={showAs}
        />
        <TableRows
          onChangeHandler={handleChange}
          cellValue={tableValues.total}
          rowFor="total"
          name="Total"
          showAs={showAs}
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
  showAs: string;
}

function TableRows({
  rowFor,
  name,
  cellValue,
  onChangeHandler,
  showAs,
}: TableRowsProps): JSX.Element {
  const { reportContent } = useContext(ReportContext);
  const { fileInfoAndBatch } = reportContent;

  const updatePercents = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    onChangeHandler(value, name as keyof AttributesObject);
  };

  const numberOfWordOrCharacters =
    fileInfoAndBatch && fileInfoAndBatch.batchTotal
      ? fileInfoAndBatch.batchTotal[rowFor][showAs]
      : 0;

  return (
    <TableRow>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{numberOfWordOrCharacters}</TableCell>
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
            {(numberOfWordOrCharacters * cellValue) / 100}
          </TableCell>
        </>
      ) : null}
    </TableRow>
  );
}

export default CalculationTable;
