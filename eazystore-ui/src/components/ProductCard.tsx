import React from 'react'
import Price from './Price'

export default function ProductCard({product}: {product: any}) {
  return (
    <div className="w-72 rounded-md mx-auto border border-gray-300 shadow-md hover:shadow-lg flex flex-col bg-white hover:shadow-lg transition">
      <div className="relative w-full h-72 border-b border-gray-300">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transition-shadow duration-500 hover:scale-110"/>
        </div>
        <div className="relative h-48 p-4 flex flex-col font-primary">
          <h3 className="text-xl font-semibold text-primary-mb-2">{product.name}</h3>
          <p className="text-base text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between mt-auto">
                <div className="bg-lighter text-primary font-medium text-sm py-2 px-4 rounded-tl-md">
                    <Price currency={product.currency} amount={product.price} />
                </div>
            <button className="bg-primary text-white font-medium py-2 px-4 rounded-br-md hover:bg-primary-dark transition-colors duration-300 border-r-emerald-50">
                Add to Cart
            </button>
            </div>
        </div>
      </div>
  )
}
