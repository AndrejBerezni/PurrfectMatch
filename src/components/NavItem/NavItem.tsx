import { ReactNode } from 'react'

import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface INavItemProps {
  icon: ReactNode
  linkTo?: string
  linkText: string
  isLink: boolean
  handleClick?: () => void
}

export default function NavItem({
  icon,
  linkTo,
  linkText,
  isLink,
  handleClick,
}: Readonly<INavItemProps>) {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip className="navbar-tooltip">{linkText}</Tooltip>}
    >
      <Nav.Item
        as={isLink ? NavLink : Nav.Item}
        to={isLink ? linkTo : null}
        className="mx-3 my-1"
        onClick={handleClick}
      >
        <p className="nav-item-text">{linkText}</p>
        {icon}
      </Nav.Item>
    </OverlayTrigger>
  )
}
