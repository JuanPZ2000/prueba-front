import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(fondo, monto, categoria) {
  return {fondo, monto, categoria};
}

const rows = [
  createData('FPV_BTG_PACTUAL_RECAUDADORA', "$75000", "FVP"),
  createData('FPV_BTG_PACTUAL_ECOPETROL', "$125000", "FVP"),
  createData('DEUDAPRIVADA',"$50000", "FIC"),
  createData('FDO-ACCIONES', "$250000", "FIC"),
  createData('FPV_BTG_PACTUAL_DINAMICA', "$100000", "FVP"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fondo</TableCell>
            <TableCell align="center">Monto minimo de vinculacion</TableCell>
            <TableCell align="center">Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fondo}
              </TableCell>
              <TableCell align="center">{row.monto}</TableCell>
              <TableCell align="center">{row.categoria}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}