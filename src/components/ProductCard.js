import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from "react-router-dom"

const ProductCard = (props) => {

  const { grid } = props;
  let location = useLocation();

  return (
    <>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname=="/" ? "product/:id" : ":id"}`} className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent'>
            <img src='/images/wish.svg' alt='wishlist'/>
          </button>
        </div>
        <div className='product-image'>
          <img src='/images/watch.jpg' className="img-fluid" alt='product image'/>
          <img src='/images/tab.jpg' className="img-fluid" alt='product image'/>
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored</h5>
          <ReactStars 
            count={5}
            size={24}
            value={4}
            activeColor="#ffd700"
          />
          <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
          Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination.
          </p>
          <p className='price'>$99.99</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
              <img src='/images/add-cart.svg' alt='addToCart'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src='/images/prodcompare.svg' alt='compare'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src='/images/view.svg' alt='view'/>
            </button>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === "/store" ? `gr-${grid}` : 'col-3'}`}>
      <Link to={`${location.pathname=="/" ? "product/:id" : ":id"}`} className='product-card position-relative'>
        <div className='wishlist-icon position-absolute'>
          <button className='border-0 bg-transparent'>
            <img src='/images/wish.svg' alt='wishlist'/>
          </button>
        </div>
        <div className='product-image'>
          <img src='/images/watch.jpg' className="img-fluid" alt='product image'/>
          <img src='/images/tab.jpg' className="img-fluid" alt='product image'/>
        </div>
        <div className='product-details'>
          <h6 className='brand'>Havels</h6>
          <h5 className='product-title'>Kids Headphones Bulk 10 Pack Multi Colored</h5>
          <ReactStars 
            count={5}
            size={24}
            value={4}
            activeColor="#ffd700"
          />
          <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
          Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination.
          </p>
          <p className='price'>$99.99</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
              <img src='/images/add-cart.svg' alt='addToCart'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src='/images/prodcompare.svg' alt='compare'/>
            </button>
            <button className='border-0 bg-transparent'>
              <img src='/images/view.svg' alt='view'/>
            </button>
          </div>
        </div>
      </Link>
    </div>
    </>
  )
}

export default ProductCard
