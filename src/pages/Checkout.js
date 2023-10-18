import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import Container from "../components/Container"

const Checkout = () => {
  return (
    <>
      <Container class1='checkout-wrapper py-5 home-wrapper-2'>
        <div className='row'>
                <div className='col-7'>
                    <div className="checkout-left-data">
                        <h3 className="website-name">HMart</h3>
                        <nav
                            style={{"--bs-breadcrumb-divider": ">"}}
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link className="text-dark" to='/cart'>Cart</Link>
                                </li> &nbsp; /
                                <li aria-current='page' className="breadcrumb-item active">
                                    Information
                                </li> &nbsp; /
                                <li className="breadcrumb-item active">
                                    Shipping
                                </li> &nbsp; /
                                <li aria-current='page' className="breadcrumb-item active">
                                    Payment
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title total">Contact Information</h4>
                        <p className="user-details total">
                            Jonny Deppy (jnon2@gmail.com)
                        </p>
                        {/* <h4 className="mb-3">Shipping Address</h4> */}
                        <form
                            action=""
                            className="d-flex gap-15 flex-wrap justify-content-between"
                        >
                            <div className="w-100">
                                <select
                                    name=""
                                    className="form-control form-select"
                                    id=""
                                >
                                    <option value="" selected disabled>
                                        Select Country
                                    </option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <input placeholder="First Name" type="text" className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                                <input placeholder="Last Name" type="text" className="form-control" />
                            </div>
                            <div className="w-100">
                                <input placeholder="Address" type="text" className="form-control" />
                            </div>
                            <div className="w-100">
                                <input type="text" placeholder="Apartment, Suite, etc. (optional)" className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                                <input type="text" placeholder="City" className="form-control" />
                            </div>
                            <div className="flex-grow-1">
                            <select
                                    name=""
                                    className="form-control form-select"
                                    id=""
                                >
                                    <option value="" selected disabled>
                                        Select State
                                    </option>
                                </select>
                            </div>
                            <div className="flex-grow-1">
                                <input placeholder="Zipcode" type="text" className="form-control" />
                            </div>
                            <div className="w-100">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to='/cart' className="total">
                                    <BiArrowBack />    Return to Cart</Link>
                                    <Link className="submit-button" to='cart'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className="d-flex gap-10 mb-2 align-items-center">
                    <div className="d-flex gap-10 w-75">
                    <div className="w-25 position-relative">
                        <span 
                        style={{top: "-10px", right: "2px"}}
                        className="badge bg-secondary p-2 text-white rounded-circle position-absolute">
                            1
                        </span>
                        <img className="img-fluid" src="/images/watch.jpg" alt="watch" />

                    </div>
                    <div>
                        <h5 className="total-price">
                        Apple Watch Series 7
                        </h5>
                        <p className="total-price">hi</p>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <h5 className="total">$100.00</h5>
                    </div>
                    </div>
                    <div className="border-bottom py-4"></div>
                    <div className="border-bottom py-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="total">SubTotal</p>
                            <p className="total-price">$200.00</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0 total">Shipping</p>
                            <p className="mb-0 total-price">$00.00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border-bottom py-5">
                        <h4 className="total">Total</h4>
                        <h5 className="total-price">$200.00</h5>
                    </div>
                </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout
