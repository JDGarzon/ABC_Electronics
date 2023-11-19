import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField } from '@mui/material'

function CustomerForm({ addCustomer, customerEdit }) {
  
    const [customerId, setId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [homePhone, setHomePhone] = useState('')
    const [cellPhone, setCellPhone] = useState('')

    useEffect(() => {
        setId(customerEdit.customerId)
        setFirstName(customerEdit.firstName)
        setLastName(customerEdit.lastName)
        setAddress(customerEdit.address)
        setDateOfBirth(customerEdit.dateOfBirth)
        setEmail(customerEdit.email)
        setHomePhone(customerEdit.homePhone)
        setCellPhone(customerEdit.cellPhone)
    }, [customerEdit])

    const handleClick = () => {
        console.log( customerId, firstName , lastName , address , dateOfBirth , email , homePhone , cellPhone)
        addCustomer({ customerId, firstName , lastName , address , dateOfBirth , email , homePhone , cellPhone})
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField label="firstName" variant="standard" value={firstName} onChange={(e) => {setFirstName(e.target.value) }} />
            <TextField label="lastName" variant="standard" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            <TextField label="address" variant="standard" value={address} onChange={(e) => { setAddress(e.target.value) }} />
            <TextField label="dateOfBirth" variant="standard" value={dateOfBirth} onChange={(e) => { setDateOfBirth(e.target.value) }} />
            <TextField label="email" variant="standard" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <TextField label="homePhone" variant="standard" value={homePhone} onChange={(e) => { setHomePhone(e.target.value) }} />
            <TextField label="cellPhone" variant="standard" value={cellPhone} onChange={(e) => { setCellPhone(e.target.value) }} />

            <Button variant="contained" onClick={handleClick}>Save</Button>
        </Box>
    )
}

CustomerForm.propTypes = {
    addCustomer: PropTypes.func,
    customerEdit: PropTypes.object
}

export default CustomerForm
