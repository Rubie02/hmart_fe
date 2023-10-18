import { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom"
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import Container from '../components/Container'
// import { Link } from 'react-router-dom'

const ProductDetail = () => {
    const props = { width: 600, height: 500, zoomWidth: 500, img: "/images/product-details-1.jpg" }
    const [orderedProduct, setOrderProduct] = useState(true);
    const copyToClipboard = (text) => {
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    }
    return (
        <>
            <Meta title={"HMart | Product Detail"} />
            <BreadCrumb title='Product Detail' />
            <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-product-images d-flex flex-wrap gap-15'>
                            <div>
                                <img className='img-fluid' src='/images/product-details-1.jpg' alt='product-image' />
                            </div>
                            <div>
                                <img className='img-fluid' src='/images/product-details-1.jpg' alt='product-image' />
                            </div>
                            <div>
                                <img className='img-fluid' src='/images/product-details-1.jpg' alt='product-image' />
                            </div>
                            <div>
                                <img className='img-fluid' src='/images/product-details-1.jpg' alt='product-image' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>Kids Headphone Bulk 10 Pack Multi Color For Students</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$100.00</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 p-review'>(2 reviews)</p>
                                </div>
                                <a className='review-btn text-decoration-underline' href='#review'>Write a Review</a>
                            </div>
                            <div className='py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type: </h3>
                                    <p className='product-data'>Smart</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand: </h3>
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Category: </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Tags: </h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availbility: </h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Size: </h3>
                                    <div className='d-flex flex-wrap gap-10'>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                    <h3 className='product-heading'>Color: </h3>
                                    <Color />
                                </div>
                                <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity: </h3>
                                    <div className=''>
                                        <input
                                            className='form-control'
                                            type='number'
                                            defaultValue={1}
                                            min={1}
                                            max={10}
                                            style={{ width: "60px" }}
                                        />
                                    </div>
                                    <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='submit-button border-0' type='submit'>
                                            Add to Cart
                                        </button>
                                        <button to='' className='submit-button signup'>
                                            Buy It Now
                                        </button>
                                    </div>

                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='/compare-product'>
                                            <TbGitCompare className='fs-5 me-2' />   Add to Compare</a>
                                    </div>
                                    <div>
                                        <a href='/wishlist'>
                                            <AiOutlineHeart className='fs-5 me-2' />Add to WishList</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Shipping & Returns: </h3>
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br />
                                        We shipp all Vietnam domestic orders within <b>3-7 business days!</b>
                                    </p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-3'>
                                    <h3 className='product-heading'>Product Link: </h3>
                                    <a href='javascript:void(0)' onClick={() => { copyToClipboard("localhost") }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-3'>

                            <p>
                                Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='review-wrapper home-wrapper-2'>
                <div className='row'>
                    <div id='review' className='col-12'>
                        <h3>Reviews</h3>
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
                            <div className='reviews mt-4'>
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
        </>
    )
}

export default ProductDetail
