import React from 'react'
import products from '../../data'
import ProductCard from '../../components/ProductCard/ProductCard'
import './Home.css'

function Home() {
    return (
        <>
            <h1 className='title'>Watch Product Cards</h1>
            <div className='product-container'>
                {
                    products.map((productObject, i) => {
                        const {
                            id,
                            name,
                            rating,
                            mrp,
                            price,
                            description,
                            img
                        } = productObject

                        return (
                            <ProductCard
                                key={i}
                                id={id}
                                name={name}
                                rating={rating}
                                mrp={mrp}
                                price={price}
                                description={description}
                                img = {img}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home