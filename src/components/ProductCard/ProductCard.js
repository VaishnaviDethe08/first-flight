import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'


function ProductCard({ id, name, rating, mrp, price, description, img } ) {
  return (
   <>
       <Link to={`/product/${id}`} className='product-card'>
        <img src={img} alt='img' className='product-img'/>
        <h2 className='product-name'> {name} </h2>
        <del className='mrp'> {mrp} </del> 
        <span className='price'> {price} </span>
    </Link>
   </>
  )
}

export default ProductCard
