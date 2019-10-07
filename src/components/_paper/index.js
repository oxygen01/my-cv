import React from "react"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.bgColor,
    padding: 16,
  },
})

const CustomPaper = ({ children, bgColor, style, ...other }) => {
  const classes = useStyles({ bgColor })
  return (
    <Paper className={classes.root} style={style} {...other}>
      {children}
    </Paper>
  )
}

export default CustomPaper
