import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from  '../config/axios'
import PropTypes from 'prop-types'

export default function SelectLabels({text,set}) {
  const [categoryList, setCategoryList] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value)
    set(event.target.value.code);
  };

  const getCategories = async () => {
    try {
       const res = await axios.get("/categories", {
        headers: {
          Authorization:  localStorage.getItem("token"),
        }},)
        setCategoryList(res.data)
    }catch(e){
      console.log(e)
    }
  }

  const  renderTasks = () => {
    return  categoryList.map((author)=>
         (<MenuItem value={author} key={author.code} >{author.code}</MenuItem>)
    )
  }

  React.useEffect( () => {getCategories()}, [])

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Author"
          onChange={handleChange}
        >
          {renderTasks()}
        </Select>
      </FormControl>
    </div>
  );
}

SelectLabels.propTypes = {
    set: PropTypes.func, 
}
