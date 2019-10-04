import React from "react"
import profilePic from "../assets/profile-pic.jpg"
import { Typography, Avatar } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { styles } from "./styles"
import { CustomPaper } from ".."

const query = graphql`
  query MeDataQuery {
    meJson {
      name
      jobTitle
      contacts {
        email
      }
    }
  }
`

const Header = () => {
  const {
    meJson: {
      name,
      jobTitle,
      contacts: { email },
    },
  } = useStaticQuery(query)

  return (
    <CustomPaper style={styles.wrapper}>
      <Avatar style={styles.profileImage} src={profilePic} />
      <Typography variant="h3">{name}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {jobTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {email}
      </Typography>
    </CustomPaper>
  )
}
export default Header
