import React from "react"
import { CustomPaper, SubHeader } from ".."
import ListContentItem from "./listContentItem"

const ListContent = ({ title, icon, list, ...other }) => {
  return (
    <CustomPaper {...other}>
      <SubHeader avatar={icon} title={title} />
      {list.map((item, index) => (
        <ListContentItem key={index} item={item} />
      ))}
    </CustomPaper>
  )
}

export default ListContent
