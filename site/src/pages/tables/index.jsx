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
  const tableData = [
    { name: 'John Smith', age: 32, email: 'john.smith@example.com' },
    { name: 'Jane Doe', age: 28, email: 'jane.doe@example.com' },
    { name: 'Bob Johnson', age: 45, email: 'bob.johnson@example.com' },
  ]


  return (
    <Layout {...props}>
      <Helmet>
        <style type='text/css'>
          {`
					h1{
            font-size: 30px;
            color: #000000;
            text-transform: uppercase;
            font-weight: 300;
            text-align: center;
            margin-bottom: 15px;
          }
          table{
            width:80%;
            table-layout: auto;
          }
          th{
            padding: 20px 15px;
            text-align: left;
            font-weight: 500;
            font-size: 12px;
            color: #000000;
            text-transform: uppercase;
          }
          td{
            padding: 15px;
            text-align: left;
            vertical-align:middle;
            font-weight: 300;
            font-size: 12px;
            color: #fff;
            border-bottom: solid 1px rgba(255,255,255,0.1);
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
    <Container variant='full'>
  
    
   <div className="overflow-x-auto">
      <table className="min-w-full rounded-lg bg-white overflow-hidden">
        <thead className="bg-gray-50">
          <tr className="text-gray-500 text-sm">
            <th className="py-3 px-4 font-medium text-left">Name</th>
            <th className="py-3 px-4 font-medium text-left">Age</th>
            <th className="py-3 px-4 font-medium text-left">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-500 text-sm divide-y divide-gray-200">
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className="py-3 px-4 text-left">{data.name}</td>
              <td className="py-3 px-4 text-left">{data.age}</td>
              <td className="py-3 px-4 text-left">{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
