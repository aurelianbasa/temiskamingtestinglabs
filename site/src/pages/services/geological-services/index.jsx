import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Features from '@solid-ui-blocks/Features/Block06'
import Clients from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import Team from '@solid-ui-blocks/Hero/Block03'
import Faq from '../../../blocks/Faq/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const GeologicalPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Geological Services' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Container variant='full' sx={styles.heroContainer}>
        <Features content={content['features']} />
      </Container>
      <Divider space='3' />
      <Faq content={content['setup']} />
      <Divider space='5' />
      <Divider space='5' />
      <Clients content={content['clients']} />
      <Divider space='5' />
      <Divider space='5' />
      <Team content={content['team']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteServicesGeologicalBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/services/geological-services", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default GeologicalPage
