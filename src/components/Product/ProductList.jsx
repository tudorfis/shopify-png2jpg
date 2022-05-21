import { Card, ResourceList, Stack, Thumbnail } from "@shopify/polaris";
import { ResourceItem, TextStyle } from "@shopify/polaris";
import {
    ImageMajor
} from '@shopify/polaris-icons';

export default function ProdcutList({ products = [] }) {
    return (
        <Card>
            <ResourceList
                showHeader
                resourceName={{
                    singular: "Product",
                    plural: "Products"
                }}
                items={products}
                renderItem={product => {
                    const image = product.images[0]?.originalSrc || ImageMajor;
                    const price = product.variants[0]?.price || 0
                    
                    return (
                        <ResourceItem
                            id={product.id}
                            media={<Thumbnail source={image} />}
                            accesibilityLabel={`View details for ${product.title}`}
                        >
                            <Stack>
                                <Stack.Item fill>
                                    <TextStyle variation="strong">
                                        <h4>{product.title}</h4>
                                    </TextStyle>
                                </Stack.Item>
                                <Stack.Item>
                                    <p>${price}</p>
                                </Stack.Item>
                            </Stack>
                        </ResourceItem>
                    )
                }}
            />
        </Card>
    )
}
