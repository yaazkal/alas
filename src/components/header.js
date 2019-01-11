import PropTypes from 'prop-types'
import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarDropdown,
  NavbarDivider,
  Button,
} from 'bloomer'

const Header = ({ siteTitle }) => (
  <div>
    <Navbar className="is-fixed-top is-dark">
      <NavbarBrand>
        <NavbarItem href="/">{siteTitle}</NavbarItem>
        <NavbarBurger />
      </NavbarBrand>

      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href="/cursos">Cursos</NavbarItem>
          <NavbarItem href="/blog">Blog</NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink href="/nosotros">Nosotros</NavbarLink>
            <NavbarDropdown>
              <NavbarItem href="/nosotros#historia">Historia</NavbarItem>
              <NavbarDivider />
              <NavbarItem href="/nosotros#artistas">Astistas</NavbarItem>
              <NavbarItem href="/nosotros#obras">Orbas</NavbarItem>
              <NavbarDivider />
              <NavbarItem href="/archivo-de-prensa">
                Archivo de prensa
              </NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem href="/contacto">Contacto</NavbarItem>
          <NavbarItem>
            <Button isColor="danger" href="/donar">
              Donar
            </Button>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
