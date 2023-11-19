import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
function Row({category,deleteCategory,editCategory }) {

  const  handleDelete = () =>  {
    deleteCategory(category.code)
  }

  const  handleEdit = (toEdite) =>  {
    editCategory(toEdite)
  }

  return (
    <TableRow
          key={category.code}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="right">{category.code}</TableCell>
          <TableCell align="left">{category.description}</TableCell>
          <TableCell align="left">
            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
            <Button variant="contained" color="success" onClick={()=>{handleEdit(category)}}>Edit</Button>
          </TableCell>
          
      </TableRow>)
}

Row.propTypes = {
  category: PropTypes.object,
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func
}

export default Row
