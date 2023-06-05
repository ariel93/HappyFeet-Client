import React,{useEffect,useState} from 'react'
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
import axios from 'axios';
import ShoesTableHeader from './ShoesTableHeader';
import { IShoe } from '../../../interfaces/shoe';
import ShoesTableRow from './ShoesTableRow';

 // Visit https://mui.com/material-ui/ for more matirial UI components 

const ShoesTable = () => {
    
    const [shoes, setShoes] = useState<IShoe[]>([])

    useEffect(()=>{
      axios.get("http://localhost:8080/shoes").then(response => setShoes(response.data) );
    },[] );
    
    return (
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
          <ShoesTableHeader/> 
          <TableBody>
              {shoes && shoes.map((shoe:IShoe, i:number)=>(
                <ShoesTableRow key={i} shoe={shoe} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}

export default ShoesTable


