import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.gray[600],
    },
    secondary: {
      main: colors.gray[400],
    },
  },
})

export default darkTheme

