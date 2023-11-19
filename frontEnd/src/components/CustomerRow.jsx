import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function Row({ customer, deleteCustomer, editCustomer }) {
    const navigate = useNavigate();
    const handleDelete = () => {
        deleteCustomer(customer.customerId)
    }

    const handleEdit = (toEdite) => {
        editCustomer(toEdite)
    }

    const handleAdd = () => {
        localStorage.setItem("customer", customer.customerId)
        navigate('/customerDinamic')

    }

    

    return (
        <TableRow
            key={customer.customerId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="right">{customer.customerId}</TableCell>
            <TableCell align="left">{customer.firstName}</TableCell>
            <TableCell align="right">{customer.lastName}</TableCell>
            <TableCell align="left">{customer.address}</TableCell>
            <TableCell align="right">{customer.dateOfBirth}</TableCell>
            <TableCell align="left">{customer.email}</TableCell>
            <TableCell align="right">{customer.homePhone}</TableCell>
            <TableCell align="left">{customer.cellPhone}</TableCell>
            <TableCell align="left">
                <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>&nbsp;
                <Button variant="contained" color="success" onClick={() => { handleEdit(customer) }}>Edit</Button>
                <Button variant="contained" color="success" onClick={() => {handleAdd() }}>ADD</Button>
            </TableCell>

        </TableRow>)
}

Row.propTypes = {
    customer: PropTypes.object,
    deleteCustomer: PropTypes.func,
    editCustomer: PropTypes.func
}

export default Row
