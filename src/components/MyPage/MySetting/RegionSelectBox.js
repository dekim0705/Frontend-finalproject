import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const theme = createTheme({
  palette: {
    primary: {
      main: "#FF62AD",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#bababa",
          "&:hover": {
            borderColor: "#fffff",
            },
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ffffff",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FF62AD",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#818087",
          },
        },
      },
    },
  },
});

const RegionSelectBox = ( props ) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCity(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 170 }}>
        <InputLabel id="city-label">관심 지역</InputLabel>
        <Select
          labelId="city-label"
          id="city-select"
          value={city}
          onChange={handleCityChange}
          sx={{borderRadius: 2}}
          label="관심 지역"
        >
        <MenuItem value="서울">서울</MenuItem>
        <MenuItem value="인천">인천</MenuItem>
        <MenuItem value="경기">경기</MenuItem>
        <MenuItem value="강원">강원</MenuItem>
        <MenuItem value="부산">부산</MenuItem>
        <MenuItem value="충북">충북</MenuItem>
        <MenuItem value="경북">경북</MenuItem>
        <MenuItem value="전남">전남</MenuItem>
        <MenuItem value="제주">제주</MenuItem>
      </Select>
      </FormControl>
      </Box>
    </ThemeProvider>
  );
}

export default RegionSelectBox;