import React from 'react'

import { Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroInicio = () => (
  <Hero isFullHeight isColor="black" className="hero-inicio">
    <HeroBody>
      <Container>
        <Columns>
          <Column>
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: {
                      eq: "Logo-Alas-de-mariposa-transparente-blanco.png"
                    }
                  ) {
                    childImageSharp {
                      fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              )}
            />
            <p>&nbsp;</p>
            <Title tag="h2">Transformamos a través del arte</Title>
          </Column>
          <Column />
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
)

export default HeroInicio
