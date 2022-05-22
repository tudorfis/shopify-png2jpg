import { Card, Button, Page } from "@shopify/polaris"

export function ImageUpload() {
    
    const uploadImage = _ => {
        console.log('a')
    }

    return (
        <Page>
            <Button 
                onClick={uploadImage}
            >
                Upload image
            </Button>
        </Page>
    )
}