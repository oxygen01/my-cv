import React from "react"
import { CustomPaper } from ".."
import { useTranslation } from "react-i18next"
import LanguageSelector from "../languageSelector"
import { Grid } from "@material-ui/core"
import { withTrans } from "../../i18n/withTrans"
const Footer = ({ t }) => {
  return (
    <CustomPaper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        © {new Date().getFullYear()}, {t("common:footerText")}
      </div>
      <div>
        <LanguageSelector />
      </div>
    </CustomPaper>
  )
}

export default withTrans(Footer)
