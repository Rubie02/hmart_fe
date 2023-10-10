import React from 'react'
import ReactStars from "react-rating-stars-component"

const ProductCard = () => {
  return (
    <div className='col-3'>
      <div className='product-card'>
        <div className='product-image'>
          <img src='/images/watch.jpg' alt='product image'/>
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored</h5>
          <ReactStars 
            count={5}
            size={24}
            activeColor="#ffd700"
          />
          <p className='price'>$99.99</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
