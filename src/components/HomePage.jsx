import {
  Card,
  Page,
  EmptyState,
} from "@shopify/polaris";

import React, { useEffect, useState } from "react";
import { ResourcePicker } from "@shopify/app-bridge-react";
import ProdcutList from "./Product/ProductList";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsId, setProductsId] = useState([]);

  useEffect(() => {
    const ids = products.map(product => ({ id: product.id }));
    setProductsId(ids);
  }, [products])

  function handleProductSelection(payload) {
    setIsOpen(false);
    setProducts(payload.selection)
  }

  return <>
    <ResourcePicker
      resourceType="Product"
      selectMultiple={true}
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      onSelection={handleProductSelection}
      initialSelectionIds={productsId}      
    />
    { products.length ? (
      <Page 
        fullWidth
        title="Product selector"
        primaryAction={{
          content: 'Select product',
          onAction: _ => setIsOpen(true)
        }}
      >
        
        <ProdcutList
          products={products}
        />
      </Page>
    ) : (
      <Card>
        <EmptyState 
          heading="Manage the products you want to display"
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
          action={{
            content: "Select products",
            onAction: () => setIsOpen(true),
            onSelection: () => {}
          }}
        >
          <p>Select the products you want to use on your banner</p>
        </EmptyState>
      </Card>
    )}
  </>
}
