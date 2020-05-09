import React from "react"
import { CustomPaper } from ".."
import { graphql, useStaticQuery } from "gatsby"
import { Typography } from "@material-ui/core"
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined"
import SubHeader from "../_subheaderComponent"
import { useTranslation } from "react-i18next"
import { withTrans } from "../../i18n/withTrans"

const query = graphql`
  query AboutMeDataQuery {
    aboutMeJson {
      title
      content
    }
  }
`

const AboutMe = ({ t }) => {
  const {
    aboutMeJson: { title, content },
  } = useStaticQuery(query)

  return (
    <CustomPaper elevation={1}>
      <SubHeader avatar={<PermIdentityOutlinedIcon />} title={t(title)} />
      <Typography variant="body2" color="textSecondary" component="p">
        {content}
      </Typography>
    </CustomPaper>
  )
}

export default withTrans(AboutMe)
