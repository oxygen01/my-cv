import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"

const BorderLinearProgress = withStyles(theme => ({
  root: {
    width: "50%",
    minWidth: 300,
    height: 10,
  },
  bar: {
    borderRadius: 20,
  },
}))(LinearProgress)

const SkillItem = ({ title, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
    }}
  >
    {title && (
      <div>
        <p>{title}</p>
      </div>
    )}
    {value && (
      <BorderLinearProgress
        variant="determinate"
        color="primary"
        value={value}
      />
    )}
  </div>
)

SkillItem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
}

export default SkillItem
