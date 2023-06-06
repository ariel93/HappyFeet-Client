import React from 'react'
import { TableHead, TableRow, TableCell } from '@mui/material'


const ShoesTableHeader = () => {
  return (   
    <TableHead>
        <TableRow >
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Price</TableCell>
        </TableRow>
    </TableHead>
  );
}
export default ShoesTableHeader


