import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './CustomerRow'
function  CustomerTable ({customerList, deleteCustomer, editCustomer}) {

  const  renderTasks = () => {
    console.log('order List:', customerList);
    return  customerList.map((Customer)=>
         (<Row key={Customer.customerId} customer={Customer} deleteCustomer={deleteCustomer} editCustomer={editCustomer}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">ID</TableCell>
          <TableCell align="left">First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="right">Date Of Birth</TableCell>
          <TableCell align="left">email</TableCell>
          <TableCell align="right">Home Phone</TableCell>
          <TableCell align="left">Cell Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderTasks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


CustomerTable.propTypes = {
  customerList: PropTypes.array,
  deleteCustomer: PropTypes.func,
  editCustomer: PropTypes.func
}

export default CustomerTable
