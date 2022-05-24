import { gql, useQuery } from "@apollo/client"
import { Page } from "@shopify/polaris"

const GET_PRODUCTS_QUERY = gql`{
    products(first: 10) {
      nodes {
        description
        createdAt
        handle
        images(first: 10) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
}`

export function GetProducts() {
  const { loading, data } = useQuery(GET_PRODUCTS_QUERY)

  console.log(data)

  if (loading) return <Page>Loading...</Page>

  return <>
    <Page>
      {data.products.nodes.map(product => (
        <p key={product.id}>{product.handle}</p>
      ))}
    </Page>
  </>
}
