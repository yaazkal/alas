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

const HeroServicios = () => (
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
                Como medio para crear una corporación autosostenible, ofrecemos
                la creación y dirección de obras de arte, servicios de
                fotografía, eventos conmemorativos, comerciales y académicos en
                las áreas en las que somos reconocidos, además de talleres
                arteterapéuticos que posibilitan generar cambios positivos y de
                impacto en las personas que participan de éstos.
              </p>
            </Content>
          </Column>
        </Columns>
      </Container>
    </HeroBody>
  </Hero>
)

export default HeroServicios
