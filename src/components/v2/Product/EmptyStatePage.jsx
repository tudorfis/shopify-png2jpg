import { useState } from "react";
import { Page, Layout, EmptyState } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export function EmptyStatePage({ products, setProducts }) {
  const [open, setOpen] = useState(false);
  const handleSelection = (payload) => {
    setOpen(false);
    setProducts(payload.selection);
  };
  return <>
    <Page>
      { products.length ? 
        <TitleBar
          primaryAction={{
            content: "Select products",
            onAction: () => setOpen(true),
          }}
        /> : <></>
      }
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={open}
        onSelection={(products) => handleSelection(products)}
        onCancel={() => setOpen(false)}
      />
      <Layout>
        <EmptyState
          heading="Discount your products temporarily"
          action={{
            content: "Select products",
            onAction: () => setOpen(true),
          }}
          image={img}
          imageContained
        >
          <p>Select products to change their price temporarily.</p>
        </EmptyState>
      </Layout>
    </Page>
  </>
}
