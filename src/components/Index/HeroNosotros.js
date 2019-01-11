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

const HeroNosotros = () => (
  <Hero>
    <HeroBody>
      <Container>
        <Columns>
          <Column>
            <Content>
              <Title tag="h2">Nosotros</Title>
              <p>
                Somos una entidad sin ánimo de lucro, que por medio de
                intervenciones artísticas y culturales buscamos contribuir a la{' '}
                <mark>toma de conciencia</mark> de los individuos en cuanto a{' '}
                <mark>el valor del otro</mark> como miembros de la comunidad y
                resaltar la importancia de la apropiación de los espacios
                públicos, como una manera de incrementar la seguridad individual
                y colectiva, convocando a las personas a realizar encuentros
                sociales, culturales y artísticos en los parques de sus barrios
                y como ejemplo llevamos a cabo nuestras actividades en el{' '}
                <strong>
                  Parque de la Bailarina Isabel Cristina Restrepo Cárdenas
                </strong>
                de la ciudad de Medellín.
              </p>
              <p>
                Todas nuestras obras tienen un especial énfasis en la{' '}
                <mark>eliminación de la violencia hacia las mujeres</mark>.
              </p>
            </Content>
          </Column>
          <Column>
            <Content>
              <StaticQuery
                query={graphql`
                  query {
                    placeholderImage: file(
                      relativePath: {
                        eq: "161126-fluturi-parque-bailarina.jpg"
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
            </Content>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
)

export default HeroNosotros
