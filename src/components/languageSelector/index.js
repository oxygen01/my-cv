import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import TranslateIcon from "@material-ui/icons/Translate"
import { useTranslation } from "react-i18next"
import { withTrans } from "../../i18n/withTrans"
const LANG = {
  EN: "en",
  DE: "de",
}
const LanguageSelector = ({ t, i18n }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelectAndClose = lang => {
    handleClose()
    i18n.changeLanguage(lang)
  }

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="language"
        onClick={handleClick}
      >
        <TranslateIcon fontSize="default" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleSelectAndClose(LANG.EN)}
          disabled={i18n.language === LANG.EN}
        >
          {t("common:language.english")}
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectAndClose(LANG.DE)}
          disabled={i18n.language === LANG.DE}
        >
          {t("common:language.german")}
        </MenuItem>
      </Menu>
    </div>
  )
}

export default withTrans(LanguageSelector)
