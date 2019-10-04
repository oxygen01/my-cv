import React from "react"
import { CardHeader } from "@material-ui/core"

const SubHeader = ({ avatar, title, subTitle }) => (
  <CardHeader
    avatar={React.cloneElement(avatar, { color: "secondary" })}
    title={title}
    subheader={subTitle}
  />
)

export default SubHeader
