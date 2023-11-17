import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './OrderRow'
function  OrderTable ({orderList, deleteOrder, editOrder}) {

  const  renderTasks = () => {
    console.log('order List:', orderList);
    return  orderList.map((order)=>
         (<Row key={order.orderNumber} order={order} deleteOrder={deleteOrder} editOrder={editOrder}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Order Number</TableCell>
          <TableCell align="left">customer id</TableCell>
          <TableCell align="right">Order Date</TableCell>
          <TableCell align="left">Shipped Date</TableCell>
          <TableCell align="left">Payment Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderTasks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


OrderTable.propTypes = {
  orderList: PropTypes.array,
  deleteOrder: PropTypes.func,
  editOrder: PropTypes.func
}

export default OrderTable
