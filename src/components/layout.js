import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Footer, Container, Columns, Column } from 'bloomer'

import Header from './header'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer id="footer">
          <Container>
            <Columns>
              <Column isSize="full">
                © {new Date().getFullYear()}, Corporación Alas de mariposa
              </Column>
            </Columns>
          </Container>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
