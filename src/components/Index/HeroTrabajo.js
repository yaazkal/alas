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

const HeroTrabajo = () => (
  <Hero>
    <HeroBody>
      <Container>
        <Columns>
          <Column>
            <Content>
              <Title tag="h2">Nuestro trabajo</Title>
              <p>
                Creados desde un hecho doloroso, el asesinato en el año 2008 de
                la mejor bailarina de ballet clásico de la ciudad de Medellín,
                nace el colectivo artístico Alas de mariposa, hoy día
                corporación, que liderada por la artista Betty Cárdenas, madre
                de Isabel, pretende llevar un mensaje de concienciación por el
                respeto a la vida.
              </p>
              <p>
                Nuestras obras artísticas están encaminadas a despertar
                conciencias y evitar la indiferencia, a través de ramas como la
                fotografía, pintura, body art, performance, música, danza,
                teatro, flashmob, escultura, entre otros.
              </p>
            </Content>
          </Column>
          <Column>
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(
                    relativePath: { eq: "alas-trabajo-exposicion.jpg" }
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
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
)

export default HeroTrabajo
