import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
function Row({product,deleteProduct,editProduct }) {

  const  handleDelete = () =>  {
    deleteProduct(product.productId)
  }

  const  handleEdit = (toEdite) =>  {
    editProduct(toEdite)
  }

  return (
    <TableRow
          key={product.productId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{product.productId}</TableCell>
          <TableCell align="right">{product.description}</TableCell>
          <TableCell align="left">{product.categoryCode}</TableCell>
          <TableCell align="left">{product.quantityAvailable}</TableCell>
          <TableCell align="right">{product.cost}</TableCell>
          <TableCell align="left">{product.sellingPrice}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{handleEdit(product)}}>Edit</Button>
          </TableCell>
          
      </TableRow>)
}

Row.propTypes = {
  product: PropTypes.object,
  deleteProduct: PropTypes.func,
  editProduct: PropTypes.func
}

export default Row
