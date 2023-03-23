import React from 'react'
import { graphql } from 'gatsby'


const Table = () => {
  const tableData = [
    { name: 'John Smith', age: 32, email: 'john.smith@example.com' },
    { name: 'Jane Doe', age: 28, email: 'jane.doe@example.com' },
    { name: 'Bob Johnson', age: 45, email: 'bob.johnson@example.com' },
  ];

  return (
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
  );
};

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
