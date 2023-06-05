import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = () => {
  const [city, setcity] = React.useState('');

  const handleChange = (event) => {
    setcity(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">지역</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="지역"
          onChange={handleChange}
        >
          <MenuItem value={1}>전체</MenuItem>
          <MenuItem value={2}>서울</MenuItem>
          <MenuItem value={3}>경기</MenuItem>
          <MenuItem value={4}>인천</MenuItem>
          <MenuItem value={5}>강원</MenuItem>
          <MenuItem value={6}>부산</MenuItem>
          <MenuItem value={7}>충북</MenuItem>
          <MenuItem value={8}>경북</MenuItem>
          <MenuItem value={9}>전남</MenuItem>
          <MenuItem value={10}>제주</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
  );
}

export default SelectBox;