import React from "react"
import { CustomPaper } from ".."
import { Typography } from "@material-ui/core"
import SubHeader from "../subheaderComponent"
import ListContentItem from "./listContentItem"

const ListContent = ({ title, icon, list }) => {
  return (
    <CustomPaper>
      <SubHeader avatar={icon} title={title} />
      {list.map(item => (
        <ListContentItem item={item} />
      ))}
    </CustomPaper>
  )
}

export default ListContent
