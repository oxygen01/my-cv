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
import { graphql, useStaticQuery } from "gatsby"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined"
import CropFreeOutlinedIcon from "@material-ui/icons/CropFreeOutlined"
import { ThemeProvider } from "@material-ui/styles"
import { withTrans } from "../i18n/withTrans"
import { Helmet } from "react-helmet"
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ibrahim Taaloulou</title>
        <meta
          name="description"
          content="Ibrahim Taaloulou software developer"
        />
        <link rel="canonical" href="https://ibrahim-taaloulou.netlify.app" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <div
          style={{ backgroundColor: "#F1F3F4", maxWidth: 1400, margin: "auto" }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <AboutMe />
            </Grid>
            <Grid item xs={12} md={6}>
              <Table
                title="Personal data"
                icon={<InfoOutlinedIcon />}
                list={perosnalData}
                bgColor={theme.palette.primary.light}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ListContent
                title="Education"
                icon={<SchoolOutlinedIcon />}
                list={education}
                bgColor={theme.palette.secondary.light}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SkillsList
                title="Skills"
                icon={<CropFreeOutlinedIcon />}
                list={skills}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SkillsList
                title="Skills"
                icon={<CropFreeOutlinedIcon />}
                list={skills}
              />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  )
}

export default Container
