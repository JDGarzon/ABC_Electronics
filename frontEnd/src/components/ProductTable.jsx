import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './ProductRow'
function  ProductTable ({productList, deleteProduct, editProduct}) {

  const  renderTasks = () => {
    console.log('Product List:', productList);
    return  productList.map((product)=>
         (<Row key={product.productId} product={product} deleteProduct={deleteProduct} editProduct={editProduct}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell align="right">ID</TableCell>
          <TableCell align="right">Descripción</TableCell>
          <TableCell align="left">
              Category
          </TableCell>
          <TableCell align="right">Cantidad disponible</TableCell>
          <TableCell align="left">Costo</TableCell>
          <TableCell align="left">Precio de venta</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {renderTasks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


ProductTable.propTypes = {
  productList: PropTypes.array,
  deleteProduct: PropTypes.func,
  editProduct: PropTypes.func
}

export default ProductTable
