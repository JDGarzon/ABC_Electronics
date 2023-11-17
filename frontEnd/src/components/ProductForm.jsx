import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField} from '@mui/material'
import SelectCategory from './SelectCategory'

function ProductForm({addProduct, ProductEdit}) {
    const [productId, setId] =  useState('')
    const [description, setDescription] =  useState('')
    const [quantityAvailable , setQuantityAvailable] =  useState('')
    const [cost , setCost] =  useState('')
    const [sellingPrice , setSellingPrice] =  useState('')
    const [categoryCode , setCategory] =  useState('')

    useEffect(()=>{
      setId(ProductEdit.productId)
      setDescription(ProductEdit.description)
      setQuantityAvailable(ProductEdit.quantityAvailable)
      setCost(ProductEdit.cost)
      setSellingPrice(ProductEdit.sellingPrice)
    }, [ProductEdit])

    const handleClick = ()=>{
      addProduct({productId,description,categoryCode, quantityAvailable,cost,sellingPrice})
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
      <TextField label="description" variant="standard" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      <SelectCategory text={"Category"} set={setCategory}/>
      <TextField label="quantityAvailable" variant="standard" value={quantityAvailable} onChange={(e)=>{setQuantityAvailable(e.target.value)}}/>
      <TextField label="cost" variant="standard" value={cost} onChange={(e)=>{setCost(e.target.value)}}/>
      <TextField label="sellingPrice" variant="standard" value={sellingPrice} onChange={(e)=>{setSellingPrice(e.target.value)}}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

ProductForm.propTypes = {
  addProduct: PropTypes.func, 
  ProductEdit:PropTypes.object
}

export default ProductForm
