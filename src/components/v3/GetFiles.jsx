

import { gql, useQuery } from "@apollo/client"
import { Page } from "@shopify/polaris"

const GET_FILES_QUERY = gql`{
    products(first: 40) {
      edges {
        node {
          id
          title
          createdAt
          images(first: 20) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
  `
/**
 * 
 * !! FOR RADU
 * IGNORE THIS SHIT
 */
// function groupBy(array, keys = [], valueKeys = []) {
//     return array.reduce((_, element) => {
//         const key = keys.reduce((value, key) => value[key], element)
//         const value = valueKeys.reduce((element, key) => element[key], element)
//         return { [key]: value }
//     }, {})
// }

// function deepExtract(obj = {}, arrayKey = '', keys = []) {
//     obj = JSON.parse(JSON.stringify(obj))

//     for (const objIndex of Object.keys(obj)) {
//         obj[objIndex][arrayKey] = obj[objIndex][arrayKey][keys[0]].map(item => item[keys[1]])
//     }

//     return obj
// }

export function GetFiles() {
    const { loading, data } = useQuery(GET_FILES_QUERY)

    if (loading) return <Page>Loading...</Page>

    console.log(data)

    // const productsGroupIds = groupBy(data?.products?.edges, ['node', 'id'], ['node'])
    // const products = deepExtract(productsGroupIds, 'images', ['edges', 'node'])

    return <>
        <Page>
            {Object.values(products).map((product, index) => <>
                <p key={index}>{product.id}</p>
                <ul>
                    {product.images.map((image, index) => (
                        <li key={index}>{image.url}</li>
                    ))}
                </ul>
            </>)}
        </Page>
    </>
}
