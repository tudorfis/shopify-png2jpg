
import { gql, useQuery } from "@apollo/client"
import { Card, Heading, Page, Stack, TextContainer, Thumbnail } from "@shopify/polaris"
import * as gqlutils from "/src/utils/graphql.utils"

const GET_PRODUCTS_QUERY = gql`{
  ${gqlutils.query(`products(first: 40)`, `
      id
      title
      createdAt
      ${gqlutils.query('images(first: 20)', `
        url
      `)}
  `)}
}`

export function ProductsWithImages() {
  const { loading, data } = useQuery(GET_PRODUCTS_QUERY)

  if (loading) return <Page>Loading...</Page>

  const products = gqlutils.extractEdges(data, 'products')
  gqlutils.extractInnerEdges(products, 'images')

  console.clear()
  console.log(products)

  return <>
    <Page>
      <TextContainer
        spacing="loose"
      >
        <Heading>Products with images</Heading>

        {products.map((product, index) => <>
          <Card
            title={product.title}
            sectioned
            key={index}
          >
            <Stack>
              {product.images.map((image, index) => <>
                <Thumbnail
                  source={image.url}
                  alt=""
                />
              </>)}
            </Stack>
          </Card>
        </>)}
      </TextContainer>
    </Page>
  </>
}
