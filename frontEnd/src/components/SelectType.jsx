import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types'

export default function SelectLabels({history,set,value}) {

  const handleChange = (event) => {
    console.log(event.target.value)
    set(value, event.target.value,history,"tipo")
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Author"
          onChange={handleChange}
        >
          <MenuItem value={"texto"} key={1} >Texto </MenuItem>
          <MenuItem value={"numero"} key={2} >Numero </MenuItem>
          <MenuItem value={"columna"} key={3} >Columna </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SelectLabels.propTypes = {
    set: PropTypes.func,
    history: PropTypes.string
}
