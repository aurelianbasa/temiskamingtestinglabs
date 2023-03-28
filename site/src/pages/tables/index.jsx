import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Tables = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)


  return (
    <Layout {...props}>
      <Helmet>
        <style type='text/css'>
          {`
					.highlight {
            background: linear-gradient(180deg,rgba(255,192,203,0) 70%, #FFC0CB	 50%);
          }
          
          h1 {
            
            font-family: helvetica;
           
          }
          
          h2 {
            
            font-family: helvetica;
           color: #ffffff;
          }
    			`}
        </style>
      </Helmet>
    <Seo title='Tables' />
    {/* Modals */}
    <ModalSimple content={content['privacy-policy']} />
    <ModalSimple content={content['disclaimer']} />
    {/* Blocks */}
    <Header content={content['header']} />
    <Divider space='5' />
      <Divider space='5' />
    <Container variant='full' align='center'>
  
    
    <h1> Hey girl, take  a look at this <span class="highlight"> highlighted</span> text!</h1>
    </Container>
    <Footer content={content['footer']} />
    </Layout>

  )
}

export const query = graphql`
  query siteTablesBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/tables", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Tables
