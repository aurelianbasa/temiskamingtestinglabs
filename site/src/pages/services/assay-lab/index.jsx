import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Team from '@solid-ui-blocks/Hero/Block03'
import Content from '@solid-ui-blocks/Content/Block01'
import Table from '../../../blocks/Table/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AssayPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Assay Lab' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='3' />
      <Container variant='full' sx={styles.heroContainer}>
      <Hero content={content['hero']} reverse />
      </Container>
      <Divider space='4' /> 
      <Container variant='wide' sx={styles.contentOneContainer}>
      <Content content={content['content-one']} />
      </Container>
      <Divider space='5' /> 
      <Table content={content['precious-metals']} />
      <Divider space='2' />
      <Table content={content['precious-metal-assay']} />
      <Divider space='5' />
      <Table content={content['gold-silver-concentrate']} />
      <Divider space='5' />
      <Team content={content['team']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteServicesAssayLabBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/services/assay-lab", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default AssayPage
