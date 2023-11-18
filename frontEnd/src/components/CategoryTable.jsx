import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import Row from './CategoryRow'
function  CategoryTable ({categoryList, deleteCategory, editCategory}) {

  const  renderTasks = () => {
    console.log('order List:', categoryList);
    return  categoryList.map((category)=>
         (<Row key={category.code} category={category} deleteCategory={deleteCategory} editCategory={editCategory}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Code</TableCell>
          <TableCell align="left">Description</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderTasks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


CategoryTable.propTypes = {
  categoryList: PropTypes.array,
  deleteCategory: PropTypes.func,
  editCategory: PropTypes.func
}

export default CategoryTable
