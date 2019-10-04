import React from "react"
import { Paper } from "@material-ui/core"

const CustomPaper = ({ children, style, ...other }) => (
  <Paper square={true} style={{ padding: 16, ...style }} {...other}>
    {children}
  </Paper>
)

export default CustomPaper
