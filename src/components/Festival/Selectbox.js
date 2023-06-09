import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
            borderColor: "#FF62AD",
            "&:hover": {
              borderColor: "#FF62AD",
            },
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FF62AD",
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
            borderColor: "#FF62AD",
          },
        },
      },
    },
  },
});





const SelectBox = () => {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', gap: '16px' , "@media (max-width: 768px)": {
            flexDirection: "column", width: "100%"
          },}}>
        <FormControl sx={{ minWidth: 170 }}>
          <InputLabel id="city-label">지역</InputLabel>
          <Select
            labelId="city-label"
            id="city-select"
            value={city}
            label="지역"
            onChange={handleCityChange}
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
        <FormControl sx={{ minWidth: 170 }}>
          <InputLabel id="date-label">시기</InputLabel>
          <Select
            labelId="date-label"
            id="date-select"
            value={date}
            label="시기"
            onChange={handleDateChange}
          >
            <MenuItem value={1}>전체</MenuItem>
            <MenuItem value={2}>개최중</MenuItem>
            <MenuItem value={3}>개최예정</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 170 }}>
          <InputLabel id="category-label">카테고리</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            label="카테고리"
            onChange={handleCategoryChange}
          >
            <MenuItem value={1}>전체</MenuItem>
            <MenuItem value={2}>카테고리 1</MenuItem>
            <MenuItem value={3}>카테고리 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default SelectBox;
