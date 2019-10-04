import React from "react"
import { CustomPaper } from ".."
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "@material-ui/core"
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined"
import SubHeader from "../subheaderComponent"

const query = graphql`
  query AboutMeDataQuery {
    aboutMeJson {
      title
      content
    }
  }
`

const AboutMe = () => {
  const {
    aboutMeJson: { title, content },
  } = useStaticQuery(query)

  return (
    <CustomPaper elevation={1}>
      <SubHeader avatar={<PermIdentityOutlinedIcon />} title={title} />
      <Typography variant="body2" color="textSecondary" component="p">
        {content}
      </Typography>
    </CustomPaper>
  )
}

export default AboutMe
