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
          key={order.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{order.id.orderNumber}</TableCell>
          <TableCell align="right">{order.id.productId}</TableCell>
          <TableCell align="right">{order.quantity}</TableCell>
          <TableCell align="left">{order.price}</TableCell>
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
