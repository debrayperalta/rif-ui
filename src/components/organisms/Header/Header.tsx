import React, { FC } from 'react'
import Hidden from '@material-ui/core/Hidden'
import { HeaderProps } from './HeaderProps'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

const Header: FC<HeaderProps> = ({ hreflogo, items, login }) => (
  <React.Fragment>
    <Hidden smDown>
      <HeaderDesktop hreflogo={hreflogo} items={items} login={login} />
    </Hidden>
    <Hidden mdUp>
      <HeaderMobile hreflogo={hreflogo} items={items} login={login} />
    </Hidden>
  </React.Fragment>
)

export default Header
