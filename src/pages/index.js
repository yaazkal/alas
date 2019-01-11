import React from 'react'

import Layout from '../components/layout'
import LogoBlanco from '../components/logoBlanco'
import Reconocimientos from '../components/reconocimientos'
import SEO from '../components/seo'

import {
  Hero,
  HeroBody,
  Container,
  Columns,
  Column,
  Content,
  Title,
} from 'bloomer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero isFullHeight isColor="black" className="hero-inicio">
      <HeroBody>
        <Container>
          <Columns>
            <Column>
              <LogoBlanco />
              <p>&nbsp;</p>
              <Title tag="h2">Transformamos a través del arte</Title>
            </Column>
            <Column />
          </Columns>
        </Container>
      </HeroBody>
    </Hero>

    <Hero>
      <HeroBody>
        <Container>
          <Columns>
            <Column>
              <Content>
                <Title tag="h2">Nosotros</Title>
                <p>
                  Somos una entidad sin ánimo de lucro, que por medio de
                  intervenciones artísticas y culturales buscamos contribuir a
                  la <mark>toma de conciencia</mark> de los individuos en cuanto
                  a <mark>el valor del otro</mark> como miembros de la comunidad
                  y resaltar la importancia de la apropiación de los espacios
                  públicos, como una manera de incrementar la seguridad
                  individual y colectiva, convocando a las personas a realizar
                  encuentros sociales, culturales y artísticos en los parques de
                  sus barrios y como ejemplo llevamos a cabo nuestras
                  actividades en el{' '}
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
              <Content>MULTIMEDIA</Content>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>

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
                  nacional e internacional, los siguientes medios de
                  comunicación han reconocido nuestra labor:
                </p>
                <Reconocimientos />
              </Content>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>

    <Hero>
      <HeroBody>
        <Container>
          <Columns>
            <Column>
              <Content>
                <Title tag="h2">Nuestro trabajo</Title>
                <p>
                  Creados desde un hecho doloroso, el asesinato en el año 2008
                  de la mejor bailarina de ballet clásico de la ciudad de
                  Medellín, nace el colectivo artístico Alas de mariposa, hoy
                  día corporación, que liderada por la artista Betty Cárdenas,
                  madre de Isabel, pretende llevar un mensaje de concienciación
                  por el respeto a la vida.
                </p>
                <p>
                  Nuestras obras artísticas están encaminadas a despertar
                  conciencias y evitar la indiferencia, a través de ramas como
                  la fotografía, pintura, body art, performance, música, danza,
                  teatro, flashmob, escultura, entre otros.
                </p>
              </Content>
            </Column>
            <Column>MULTIMEDIA</Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>

    <Hero isColor="success">
      <HeroBody>
        <Container>
          <Columns>
            <Column>
              <h2 className="subtitle">
                Estas empresas han disfrutado de nuestros servicios:
              </h2>
              <p>MULTIMEDIA</p>
            </Column>
            <Column>
              <Content>
                <Title>Servicios</Title>
                <p>
                  Como medio para crear una corporación autosostenible,
                  ofrecemos la creación y dirección de obras de arte, servicios
                  de fotografía, eventos conmemorativos, comerciales y
                  académicos en las áreas en las que somos reconocidos, además
                  de talleres arteterapéuticos que posibilitan generar cambios
                  positivos y de impacto en las personas que participan de
                  éstos.
                </p>
              </Content>
            </Column>
          </Columns>
        </Container>
      </HeroBody>
    </Hero>
  </Layout>
)

export default IndexPage
