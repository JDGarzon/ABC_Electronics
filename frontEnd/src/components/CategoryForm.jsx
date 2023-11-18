import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, TextField} from '@mui/material'
import SelectCategory from './SelectCategory'

function Categoryorm({addCategory, categoryEdit}) {
    const [code, setId] =  useState('')
    const [description, setDescription] =  useState('')

    useEffect(()=>{
      setId(categoryEdit.code)
      setDescription(categoryEdit.description)
    }, [categoryEdit])

    const handleClick = ()=>{
      addCategory({code,description})
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
      <TextField label="code" variant="standard" value={code} onChange={(e)=>{setId(e.target.value)}}/>
      <TextField label="description" variant="standard" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
      <Button variant="contained" onClick={handleClick}>Save</Button>
    </Box>
  )
}

Categoryorm.propTypes = {
    addCategory: PropTypes.func, 
    categoryEdit:PropTypes.object
}

export default Categoryorm
