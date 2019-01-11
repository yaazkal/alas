import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroInicio from '../components/Index/HeroInicio'
import HeroNosotros from '../components/Index/HeroNosotros'
import HeroReconocimientos from '../components/Index/HeroReconocimientos'
import HeroTrabajo from '../components/Index/HeroTrabajo'
import HeroServicios from '../components/Index/HeroServicios'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Inicio"
      keywords={[
        `alas de mariposa`,
        `medellín`,
        `colombia`,
        `betty cárdenas`,
        `parque de la bailarina`,
      ]}
    />

    <HeroInicio />
    <HeroNosotros />
    <HeroReconocimientos />
    <HeroTrabajo />
    <HeroServicios />
  </Layout>
)

export default IndexPage
