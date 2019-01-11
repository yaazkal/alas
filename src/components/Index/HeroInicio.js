import React from 'react'

import { Hero, HeroBody, Container, Columns, Column, Title } from 'bloomer'
import LogoBlanco from '../logoBlanco'

const HeroInicio = () => (
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
)

export default HeroInicio
