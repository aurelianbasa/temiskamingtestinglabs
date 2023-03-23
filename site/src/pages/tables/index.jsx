import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'


const Tables = () => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)
  const tableData = [
    { name: 'John Smith', age: 32, email: 'john.smith@example.com' },
    { name: 'Jane Doe', age: 28, email: 'jane.doe@example.com' },
    { name: 'Bob Johnson', age: 45, email: 'bob.johnson@example.com' },
  ]


  return (
    <Layout {...props}>
    <Seo title='Tables' />
    {/* Modals */}
    <ModalSimple content={content['privacy-policy']} />
    <ModalSimple content={content['disclaimer']} />
    {/* Blocks */}
    <Header content={content['header']} />
    <Container variant='full' >
    <Divider space='5' />
    </Container>
    <Footer content={content['footer']} />
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
