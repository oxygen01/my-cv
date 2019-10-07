import React from "react"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.bgColor,
    padding: 16,
    borderRadius: props => props.borderRadius,
  },
})

const CustomPaper = ({ children, bgColor, borderRadius, style, ...other }) => {
  const classes = useStyles({ bgColor, borderRadius })
  return (
    <Paper className={classes.root} style={style} {...other}>
      {children}
    </Paper>
  )
}

export default CustomPaper
