import React, { FunctionComponent } from 'react'
import { TableRow, TableCell } from '@mui/material'
import { IShoe } from '../../../interfaces/shoe'

interface IProps {
    shoe : IShoe
}

const ShoesTableRow: FunctionComponent<IProps> = ({shoe}) => {
  return (
    <TableRow 
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //onClick=
    >
        <TableCell align="left">{shoe.name}</TableCell>
        <TableCell align="left">{shoe.brand}</TableCell>
        <TableCell align="left">{shoe.price}</TableCell>  
    </TableRow>
  )
}

export default ShoesTableRow