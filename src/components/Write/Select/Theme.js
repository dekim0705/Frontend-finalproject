import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF62AD'
    }
  }
});

const Theme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
            코스 테마
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>맛집 코스</option>
            <option value={20}>힐링 코스</option>
            <option value={30}>도보 코스</option>
            <option value={40}>캠핑 코스</option>
            <option value={50}>반려동물과 함께</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}

export default Theme;