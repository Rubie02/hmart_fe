import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <Meta title={"HMart | Cart"}/>
      <BreadCrumb title='Cart'/>
      <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img className='img-fluid' src='/images/watch.jpg' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <p>Apple Watch Series 7</p>
                                <p>Size: M</p>
                                <p>Color: Black</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$100.00</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input defaultValue={1} min={1} max={10} className='form-control' type='number' />
                            </div>
                            <div>
                                <AiFillDelete className='text-danger' />
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$100.00</h5>
                        </div>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img className='img-fluid' src='/images/watch.jpg' alt='watch' />
                            </div>
                            <div className='w-75'>
                                <p>Apple Watch Series 7</p>
                                <p>Size: M</p>
                                <p>Color: Black</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$100.00</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input defaultValue={1} min={1} max={10} className='form-control' type='number' />
                            </div>
                            <div>
                                <AiFillDelete className='text-danger' />
                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5 className='price'>$100.00</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between'>
                    <Link to='/store' className='submit-button'>Continue to Shopping</Link>
                    </div>
                    <div className='d-flex align-items-end flex-column'>
                        <h4>SubTotal: $200.00</h4>
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to='/checkout' className='button'>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Cart