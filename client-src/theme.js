import { createTheme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.red[600],
    },
    secondary: {
      main: colors.purple[600],
    },
  },
})

export default darkTheme

