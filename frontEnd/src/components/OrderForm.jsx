import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField} from '@mui/material'
import SelectCategory from './SelectCategory'

function OrderForm({addOrder, orderEdit}) {
    const [orderNumber, setId] =  useState('')
    const [customerId, setCustomerId] =  useState('')
    const [orderDate , setOrderDate] =  useState('')
    const [shippedDate , setShippedDate] =  useState('')
    const [paymentDate , setPaymentDate] =  useState('')

    useEffect(()=>{
      setId(orderEdit.orderNumber)
      setCustomerId(orderEdit.customerId)
      setOrderDate(orderEdit.orderDate)
      setShippedDate(orderEdit.shippedDate)
      setPaymentDate(orderEdit.paymentDate)
    }, [orderEdit])

    const handleClick = ()=>{
      addOrder({orderNumber,customerId, orderDate,shippedDate,paymentDate})
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
      <TextField label="customerId" variant="standard" value={customerId} onChange={(e)=>{setCustomerId(e.target.value)}}/>
      <TextField label="orderDate" variant="standard" value={orderDate} onChange={(e)=>{setOrderDate(e.target.value)}}/>
      <TextField label="shippedDate" variant="standard" value={shippedDate} onChange={(e)=>{setShippedDate(e.target.value)}}/>
      <TextField label="paymentDate" variant="standard" value={paymentDate} onChange={(e)=>{setPaymentDate(e.target.value)}}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

OrderForm.propTypes = {
    addOrder: PropTypes.func, 
    orderEdit:PropTypes.object
}

export default OrderForm
