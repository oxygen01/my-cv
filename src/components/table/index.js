import React from "react"
import PropTypes from "prop-types"
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core"
import { string } from "postcss-selector-parser"
import { CustomPaper } from ".."
import SubHeader from "../_subheaderComponent"

const TableContent = ({ title, icon, list, ...other }) => {
  return (
    <CustomPaper {...other}>
      <SubHeader avatar={icon} title={title} />
      <Table>
        <TableBody>
          {list.map(item => (
            <TableRow key={item.key}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CustomPaper>
  )
}

TableContent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ key: string, value: string })),
}

TableContent.defaultProps = {
  list: {},
}

export default TableContent
