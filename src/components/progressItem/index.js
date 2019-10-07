import React from "react"
import { CustomPaper } from ".."
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import LinearProgress from "@material-ui/core/LinearProgress"
import { ThemeProvider } from "@material-ui/styles"

const BorderLinearProgress = withStyles(
  theme =>
    console.log(theme) || {
      root: {
        height: 10,
        backgroundColor: theme.secondery,
      },
      bar: {
        borderRadius: 20,
        backgroundColor: theme.secondery,
      },
    }
)(LinearProgress)

const ProgressItem = ({}) => (
  <>
    <BorderLinearProgress variant="determinate" color="secondary" value={50} />
  </>
)

export default ProgressItem
