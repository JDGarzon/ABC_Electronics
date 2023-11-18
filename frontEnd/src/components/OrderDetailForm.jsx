import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField} from '@mui/material'

function OrderDetailForm({addOrder, orderDetailEdit}) {
    const [orderNumber, setOrderNumber] =  useState('')
    const [productId, setProductId] =  useState('')
    const [quantity , setQuantity] =  useState('')
    const [price , setPrice] =  useState('')

    useEffect(()=>{
        if(orderDetailEdit){
            setOrderNumber(orderDetailEdit.id.orderNumber)
            setProductId(orderDetailEdit.id.productId)
            setQuantity(orderDetailEdit.quantity)
            setPrice(orderDetailEdit.price)
        }
    }, [orderDetailEdit])

    const handleClick = ()=>{
      addOrder({id:{orderNumber,productId}, quantity,price})
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
      <TextField label="productId" variant="standard" value={productId} onChange={(e)=>{setProductId(e.target.value)}}/>
      <TextField label="orderNumber" variant="standard" value={orderNumber} onChange={(e)=>{setOrderNumber(e.target.value)}}/>
      <TextField label="quantity" variant="standard" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
      <TextField label="price" variant="standard" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

OrderDetailForm.propTypes = {
    addOrder: PropTypes.func, 
    orderDetailEdit:PropTypes.object
}

export default OrderDetailForm
