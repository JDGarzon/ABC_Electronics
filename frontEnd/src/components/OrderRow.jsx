import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
function Row({order,deleteOrder,editOrder }) {

  const  handleDelete = () =>  {
    deleteOrder(order.orderNumber)
  }

  const  handleEdit = (toEdite) =>  {
    editOrder(toEdite)
  }

  return (
    <TableRow
          key={order.orderNumber}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{order.orderNumber}</TableCell>
          <TableCell align="right">{order.customerId}</TableCell>
          <TableCell align="left">{order.orderDate}</TableCell>
          <TableCell align="left">{order.shippedDate}</TableCell>
          <TableCell align="right">{order.paymentDate}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{handleEdit(order)}}>Edit</Button>
          </TableCell>
          
      </TableRow>)
}

Row.propTypes = {
  order: PropTypes.object,
  deleteOrder: PropTypes.func,
  editOrder: PropTypes.func
}

export default Row
