import React from 'react'

import ShoppingCardItem from './ShoppingCardItem'

export default function ShoppingCard(props) {
    const {
        shoppingCardItems,
        handleShoppingCardItemDelete,
        dragOver,
        dragDrop
    } = props

    let overallPrice = 0;

    shoppingCardItems.forEach(item => {
        overallPrice += item.price;
    });

    function displayPrice() {
        if (!overallPrice) return;
        return <div className='shopping-card__overall-price'>Price: {overallPrice}$</div>
    }

  return (
    <div className='wrapper__shopping-card' onDragOver={(e) => dragOver(e)} onDrop={(e) => dragDrop(e)}>
        <p>Shopping card</p>
        <div className='wrapper__shoping-card-items'>
            {shoppingCardItems.map((item, index) => {
                return <ShoppingCardItem 
                    item={item} 
                    key={index} 
                    handleShoppingCardItemDelete={handleShoppingCardItemDelete}
                />
            })}
        </div>
        {displayPrice()}
    </div>
  )
}
