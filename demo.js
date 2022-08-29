import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import * as Mui from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
export default function SimpleContainer() {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    const koko = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
    () => {
      clearInterval(koko);
    };
    console.log('done');
  }, []);
  return <Mui.Typography>Number is {number}</Mui.Typography>;
}
