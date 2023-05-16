import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Tabs from '@solid-ui-components/Tabs'
import BuildBrand from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import Gallery from '@solid-ui-blocks/Blog/Block01'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block04'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <FeatureOne content={content['feature-one']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs space={5}>
          <Gallery content={content['gallery-one']} />
					<Gallery content={content['gallery-two']} />
        </Tabs>
      </Container>
      <Divider space='5' />
      <Container variant='full' sx={styles.buildBrandContainer}>
        <BuildBrand content={content['build-brand']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <WhyChooseUs content={content['why-choose-us']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteIndexBlockContent {
    allBlockContent(filter: { page: { in: ["site/index", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
