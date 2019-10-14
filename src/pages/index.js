import React from "react"
import {
  Header,
  Footer,
  AboutMe,
  Table,
  ListContent,
  theme,
  SkillsList,
} from "../components"
import { Grid } from "@material-ui/core"
import { useStaticQuery } from "gatsby"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined"
import CropFreeOutlinedIcon from "@material-ui/icons/CropFreeOutlined"

import { graphql } from "gatsby"
import { ThemeProvider } from "@material-ui/styles"

export const query = graphql`
  query CVInfoDataQuery {
    cvInfoJson {
      perosnalData {
        key
        value
      }
      education {
        date {
          from
          to
        }
        location
        title
        details
      }
      skills {
        skill
        value
      }
    }
  }
`
const Container = () => {
  const {
    cvInfoJson: { perosnalData, education, skills },
  } = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#F1F3F4" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} justify="center">
            <Header />
          </Grid>
          <Grid item xs={12}>
            <AboutMe />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Table
              title="Personal data"
              icon={<InfoOutlinedIcon />}
              list={perosnalData}
              bgColor={theme.palette.primary.light}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ListContent
              title="Education"
              icon={<SchoolOutlinedIcon />}
              list={education}
              bgColor={theme.palette.secondary.light}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <SkillsList
              title="Skills"
              icon={<CropFreeOutlinedIcon />}
              list={skills}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <SkillsList
              title="Skills"
              icon={<CropFreeOutlinedIcon />}
              list={skills}
            />
          </Grid>
          <Grid item lg={6}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Container
