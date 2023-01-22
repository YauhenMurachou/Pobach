import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6e6ef8' },
    secondary: { main: '#9c27b0' },
    info: { main: '#64748B' },
  },
});

type Props = {
  children: ReactNode;
};

export const MaterialProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children} </ThemeProvider>
);
