
import { gql, useQuery } from "@apollo/client"
import { Card, Heading, Page, Stack, TextContainer, Thumbnail } from "@shopify/polaris"

const GET_PRODUCTS_QUERY = gql`{
  products(first: 5) {
    edges {
      node {
        id
        title
        createdAt
        images(first: 5) {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    }
  }
}`

export default function () {
  const { loading, data } = useQuery(GET_PRODUCTS_QUERY)
  if (loading) return <Page>Loading...</Page>

  const { products } = data

  return <>
    <Page>
      <TextContainer
        spacing="loose"
      >
        <Heading>Products with images</Heading>

        {products.edges.map(({ node: product }) => (
          <Card
            key={product.id}
            title={product.title}
            sectioned
          >
            <Stack>
              {product.images.edges.map(({ node: image }) => (
                <Thumbnail
                  key={image.id}
                  source={image.url}
                  alt=""
                />
              ))}
            </Stack>
          </Card>
        ))}
      </TextContainer>
    </Page>
  </>
}
