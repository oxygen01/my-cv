import React from "react"
import SkillItem from "./skillItem"
import { CustomPaper, SubHeader } from ".."

const SkillsList = ({ list, icon, title }) => (
  <CustomPaper>
    <SubHeader avatar={icon} title={title} />
    {list.map((item, index) => (
      <SkillItem key={index} title={item.skill} value={item.value} />
    ))}
  </CustomPaper>
)

export default SkillsList
