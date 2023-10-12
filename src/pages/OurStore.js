import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"


const OurStore = () => {
  return (
    <>
      <Meta title={"HMart | Our Store"}/>
      <BreadCrumb title='Our Store'/>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Shop By Categories</h3>
                <div>
                  <ul className='ps-0'>
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Filter By</h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                  <div>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id=""
                    />
                    <label className='form-check-label' htmlFor="">
                      In Stock (23)
                    </label>
                  </div>
                  <div className='form-check'>
                    <input 
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id=""
                    />
                    <label className='form-check-label' htmlFor="">
                      Out of Stock (2)
                    </label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Price</h5>
                  <div className='d-flex align-items-center gap-10'>
                    <div className='form-floating mb-3'>
                      <input 
                        type='email'
                        className='form-control'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating mb-3'>
                      <input 
                        type='email'
                        className='form-control'
                        id='floatingInput1'
                        placeholder='To'
                      />
                      <label htmlFor='floatingInput1'>To</label>
                    </div>
                  </div>
                  <h5 className='sub-title'>Colors</h5>
                  <div className='d-flex flex-wrap'>
                    <ul className='colors ps-0'>
                      <li className='color-1'></li>
                      <li className='color-2'></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className='sub-title'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=""
                      />
                      <label className='form-check-label' htmlFor="">
                        S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=""
                      />
                      <label className='form-check-label' htmlFor="">
                      M (3)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=""
                      />
                      <label className='form-check-label' htmlFor="">
                      L (23)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=""
                      />
                      <label className='form-check-label' htmlFor="">
                      XL (13)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input 
                        className='form-check-input'
                        type='checkbox'
                        value=""
                        id=""
                      />
                      <label className='form-check-label' htmlFor="">
                      XXL (3)
                      </label>
                    </div>
                  </div>

                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Product Tags</h3>
                <div>
                  <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Iphone</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Speaker</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Samsung</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Free Delivery</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>On Sale</span>
                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Hot Product</span>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-title'>Random Products</h3>
                <div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='/images/watch.jpg' className='img-fluid' alt='watch'/>
                    </div>
                    <div className='w-50'>
                      <h5>Kids watch with multi color</h5>
                      <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        activeColor="#ffd700"
                      />
                      <b>$ 299.00</b>
                    </div>
                  </div>
                  <div className='random-products d-flex'>
                    <div className='w-50'>
                      <img src='/images/watch.jpg' className='img-fluid' alt='watch'/>
                    </div>
                    <div className='w-50'>
                      <h5>Kids watch with multi color</h5>
                      <ReactStars 
                        count={5}
                        size={24}
                        value={4}
                        activeColor="#ffd700"
                      />
                      <b>$ 299.00</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStore