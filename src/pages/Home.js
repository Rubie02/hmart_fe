import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from "../components/BlogCard"
import ProductCard from "../components/ProductCard"
import SpecialProduct from '../components/SpecialProduct'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { services } from '../utils/Data'

const Home = () => {
  return (
    <>
      <Meta title={"HMart"}/>
      <Container class1='home-wrapper-1 py-5'>
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
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                {services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                  <img src={i.image} alt='services'/>
                  <div>
                    <h6>{i.title}</h6>
                    <p className='mb-0'>{i.tagline}</p>
                  </div>
                </div>
                  )
                })}
              </div>
            </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
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
      </Container>

      <Container class1='special-wrapper py-5 home-wrapper-2'>
       <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
        </div>
        <div className='row'>
            
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1='famous-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-1.png' className='img-fluid' alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>BIG SCREEN</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-2.png' className='img-fluid' alt='famous'/>
                <div className='famous-content-black position-absolute'>
                  <h5>STUDIO DISPLAY</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-3.png' className='img-fluid' alt='famous'/>
                <div className='famous-content-black position-absolute'>
                  <h5>SMARTPHONES</h5>
                  <h6>Smartphone 15 Pro</h6>
                  <p>From $999</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='/images/famous-4.png' className='img-fluid' alt='famous'/>
                <div className='famous-content-black position-absolute'>
                  <h5>HOME SPEAKERS</h5>
                  <h6>Room-filling sound</h6>
                  <p>From $599</p>
                </div>
              </div>
            </div>
        </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1='marque-wrapper home-wrapper-2 py-5'>
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
      </Container>

      <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <div className='row'>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
            </div>
        </div>
      </Container>
    </>
  )
}

export default Home
