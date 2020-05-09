import React from "react"
import { withTrans } from '../i18n/withTrans’

const Layout = ({ children, t, i18n }) => {
    return (
        <>
          <Header/>
            <div data-testid="test">
               <main>{children}</main>
            </div>
          <footer>
             © {new Date().getFullYear()}, {t('home.footerText')}
          </footer>
        </>
    )
}

export default withTrans(Layout)