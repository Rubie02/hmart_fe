import { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"

const ProductDetail = () => {
  const [orderedProduct, setOrderProduct] = useState(true);
  return (
    <>
      <Meta title={"HMart | Product Detail"}/>
      <BreadCrumb title='Product Detail'/>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
        </div>
      </div>

      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p className='bg-white p-3'>
                    Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination.
                    </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <section className='review-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='review-inner-wrapper'>
                    <div className='review-head d-flex justify-content-between align-items-end'>
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className='d-flex align-items-center gap-10'>
                            <ReactStars 
                                count={5}
                                size={24}
                                value={4}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0'>Based on 2 reviews</p>
                            </div>
                        </div>
                        {orderedProduct && (<div>
                            <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
                        </div>)}
                    </div>
                    <div className='review-form py-4'>
                        <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols={30} rows={5} placeholder='Comment' ></textarea>
                    </div>
                    <ReactStars 
                                count={5}
                                size={24}
                                value={4}
                                activeColor="#ffd700"
                            />
                    <div>
                      <button className='submit-button border-0'>Submit Review</button>
                    </div>
                  </form>
                    </div>
                    <div className='reviews'>
                        <div className='review'>
                            <div className='d-flex gap-10 align-items-center'>
                                <h6 className='mb-0'>Johny Deepy</h6>
                                <ReactStars 
                                count={5}
                                size={24}
                                value={4}
                                activeColor="#ffd700"
                                />
                            </div>
                            <p className='mt-1'>This is so good.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
