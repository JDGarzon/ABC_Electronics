import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './OrderDetailRow'
function  OrderTable ({orderList, deleteOrder, editOrder}) {

  const  renderTasks = () => {
    console.log('order List:', orderList);
    return  orderList.map((order)=>
         (<Row key={order.id} order={order} deleteOrder={deleteOrder} editOrder={editOrder}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Order Number</TableCell>
          <TableCell align="right">product id</TableCell>
          <TableCell align="right">quantity</TableCell>
          <TableCell align="left">Price</TableCell>
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
