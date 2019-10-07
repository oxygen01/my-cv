import React from "react"
import { Typography, Grid } from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import EventOutlinedIcon from "@material-ui/icons/EventOutlined"
// import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined"

export default ({ item }) => {
  const { title, details, date, location, titleDetails, technologies } = item
  return (
    <>
      {titleDetails}
      <Typography>{title}</Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {technologies && (
            <div style={{ display: "flex" }}>
              <EventOutlinedIcon fontSize="small" />
              <Typography variant="caption" display="block" gutterBottom>
                {technologies}
              </Typography>
            </div>
          )}
        </Grid>
        <Grid item xs={3}>
          {location && (
            <div style={{ display: "flex" }}>
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography variant="caption" display="block" gutterBottom>
                {location}
              </Typography>
            </div>
          )}
        </Grid>
        <Grid item xs={3}>
          {date && (
            <div style={{ display: "flex" }}>
              <EventOutlinedIcon fontSize="small" />
              <Typography variant="caption" display="block" gutterBottom>
                {date.from} - {date.to}
              </Typography>
            </div>
          )}
        </Grid>
      </Grid>
      <Typography
        gutterBottom
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {details}
      </Typography>
    </>
  )
}
