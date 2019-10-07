import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#DCEED0",
      main: "#4FAD17",
    },
    secondary: {
      light: "#F8D7D2",
      main: "#FF8269",
    },
    background: {
      default: "#FDFDFD",
    },
  },
})

export default theme
