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

const Schedule = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
            코스 일정
          </InputLabel>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>당일 여행</option>
            <option value={20}>1박 2일</option>
            <option value={30}>2박 3일</option>
          </NativeSelect>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}

export default Schedule;