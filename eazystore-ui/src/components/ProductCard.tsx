import React from 'react'
import Price from './Price'

export default function ProductCard({product}: {product: any}) {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-card-image"/>
        <div className="product-card-details">
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-description">{product.description}</p>
        </div>
        <div className="product-card-footer">
            <div className="product-card-price">
                <Price currency={product.currency} amount={product.price} />
            </div>
          <button className="product-card-button">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
