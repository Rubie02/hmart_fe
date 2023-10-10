import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img 
                src='/images/main-banner.jpg' 
                className='img-fluid rounded-3'
                alt='main banner'/>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPhone 15 Pro</h5>
                  <p>From $999</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center gap-10'>
                <div className='small-banner position-relative'>
                  <img 
                  src='/images/catbanner-01.jpg' 
                  className='img-fluid rounded-3'
                  alt='main banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>Best Sale.</h4>
                    <h5>Laptops</h5>
                    <p>From $499</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img 
                  src='/images/catbanner-02.jpg' 
                  className='img-fluid rounded-3'
                  alt='main banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL.</h4>
                    <h5>IPad Air</h5>
                    <p>From $599</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img 
                  src='/images/catbanner-03.jpg' 
                  className='img-fluid rounded-3'
                  alt='main banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>15% OFF.</h4>
                    <h5>Smart Watch</h5>
                    <p>From $399</p>
                  </div>
              </div>
              <div className='small-banner position-relative'>
                  <img 
                  src='/images/catbanner-04.jpg' 
                  className='img-fluid rounded-3'
                  alt='main banner'/>
                  <div className='small-banner-content position-absolute'>
                    <h4>FREE DELIVERY.</h4>
                    <h5>AirPods</h5>
                    <p>From $299</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service.png' alt='services'/>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $199</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='/images/service-05.png' alt='services'/>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>    
                  </div>
                  <img src='/images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>99 items</p>    
                  </div>
                  <img src='/images/laptop.jpg' alt='laptop'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Televisions</h6>
                    <p>49 items</p>    
                  </div>
                  <img src='/images/tv.jpg' alt='tv'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Headphones</h6>
                    <p>39 items</p>    
                  </div>
                  <img src='/images/headphone.jpg' alt='headphone'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>29 items</p>    
                  </div>
                  <img src='/images/camera.jpg' alt='camera'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Accessories</h6>
                    <p>17 items</p>    
                  </div>
                  <img src='/images/acc.jpg' alt='acc'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Speakers</h6>
                    <p>23 items</p>    
                  </div>
                  <img src='/images/speaker.jpg' alt='speaker'/>
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 items</p>    
                  </div>
                  <img src='/images/homeapp.jpg' alt='applicances'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='marque-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-01.png' alt='brand'/>
                  </div >
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-02.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-03.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-04.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-05.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-06.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-07.png' alt='brand'/>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='/images/brand-08.png' alt='brand'/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
