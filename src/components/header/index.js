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
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Avatar style={styles.profileImage} src={profilePic} />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {jobTitle}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {email}
      </Typography>
    </div>
  )
}
export default Header
