import React from "react"
import { Header, Footer, AboutMe, Table, ListContent } from "../components"
import { Grid } from "@material-ui/core"
import { useStaticQuery } from "gatsby"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined"

import { graphql } from "gatsby"
import { ThemeProvider } from "@material-ui/styles"
import theme from "../components/themeProvider"

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
    }
  }
`
const Container = () => {
  const {
    cvInfoJson: { perosnalData, education },
  } = useStaticQuery(query)

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#F1F3F4" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <AboutMe />
          </Grid>
          <Grid item xs={12}>
            <Table
              title="Personal data"
              icon={<InfoOutlinedIcon />}
              list={perosnalData}
            />
          </Grid>
          <Grid item xs={12}>
            <ListContent
              title="Education"
              icon={<SchoolOutlinedIcon />}
              list={education}
            />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Container
