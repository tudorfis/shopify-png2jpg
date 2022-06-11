import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import './css/index.css'

import React, {useState, useRef} from "react";

import ShoppingCard from "./ShoppingCard";
import TestShop from "./TestShop";

export function HomePage() {

  const bicycleRed = {
    id: 1,
    name: 'Red Bicycle',
    color: 'red',
    image: 'https://media.istockphoto.com/photos/red-bicycle-picture-id106475902?k=20&m=106475902&s=612x612&w=0&h=mPHadsATohYlrJdn_Jrg0l-f_jO9YU0Xj0-j4bYEJCo=',
    imgWidth: '360px',
    imgHeight: '250px',
    weight: 2,
    price: 600
  }

  const bicycleBlue = {
    id: 2,
    name: 'Blue bicycle',
    color: 'blue',
    weight: 3,
    price: 400,
    image: 'https://images.freeimages.com/images/small-previews/e3d/mountain-bike-1450482.jpg',
    imgWidth: '403.99px',
    imgHeight: '238.99px'
  }

  const gloves = {
    id: 3,
    name: 'Gloves',
    color: 'black',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eEWfnQRW1irWy-6RDGyR6k0J1wDNrLVP4Q&usqp=CAU',
    weight: 0.2,
    price: 20
  }
  const tShirt = {
    id: 4,
    name: 'T-Shirt',
    color: 'green',
    image: 'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imgWidth: '190px',
    imgHeight: '250px',
    weight: 0.1,
     price: 100
  }

  const StoreItems = [
    bicycleBlue,
    bicycleRed,
    tShirt,
    gloves
  ]

  const shoppingCardItems = []
  
  const [shoppingCardItemsArr, setShoppingCardItems] = useState(shoppingCardItems)

  function handleAddItemToCard(id) {
    const choosenItem = StoreItems.find(item => {
      if (item.id  === id) {
        return item;
      }
    })

    setShoppingCardItems([...shoppingCardItemsArr, choosenItem])
  }

  function handleShoppingCardItemDelete(id) {
    setShoppingCardItems(shoppingCardItemsArr.filter(item => item.id !== id))
  }

  function dragStart (e, id) {
    e.dataTransfer.setData('id', id)
  }

  function dragOver (e) {
    e.preventDefault()
  }

  function dragDrop (e) {
    e.target.classList.remove('item-dragged-over')
    const id = e.dataTransfer.getData('id')
    const choosenItem = StoreItems.find(item => {
      if (item.id  == id) {
        return item;
      }
    })

    setShoppingCardItems([...shoppingCardItemsArr, choosenItem])
  }

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <TestShop 
            StoreItems={StoreItems} 
            handleAddItemToCard={handleAddItemToCard}
            dragStart={dragStart}
          />
        </Layout.Section>
        <Layout.Section secondary>
          <ShoppingCard 
            shoppingCardItems={shoppingCardItemsArr} 
            handleShoppingCardItemDelete={handleShoppingCardItemDelete}
            dragOver={dragOver}
            dragDrop={dragDrop}
          />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
