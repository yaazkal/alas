import React from 'react'

import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Content,
  Title,
} from 'bloomer'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeroReconocimientos = () => (
  <Hero>
    <HeroBody>
      <Container>
        <Columns>
          <Column isHidden="mobile">
            <iframe
              title="Titanes Caracol Medellín"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IZpl4_UBgMA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Column>
          <Column>
            <Content>
              <Title tag="h2">Reconocimientos</Title>
              <p>
                En el año 2011 y por medio del decreto 1559 de la ciudad de
                Medellín, nuestra corporación fue reconocida con la{' '}
                <strong>Medalla al mérito femenino, categoría oro</strong>.
                Adicionalmente, debido al impacto que hemos logrado a nivel
                nacional e internacional, los siguientes medios de comunicación
                han reconocido nuestra labor:
              </p>
              <StaticQuery
                query={graphql`
                  query {
                    placeholderImage: file(
                      relativePath: { eq: "reconocimientos.jpg" }
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
            </Content>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
)

export default HeroReconocimientos
