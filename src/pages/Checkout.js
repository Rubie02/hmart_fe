import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"

const Checkout = () => {
  return (
    <>
      <div className='checkout-wrapper py-2 home-wrapper-2'>
        <div className='container-xxl'>
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
                                <li className="breadcrumb-item">
                                    Shipping
                                </li> &nbsp; /
                                <li aria-current='page' className="breadcrumb-item active">
                                    Payment
                                </li>
                            </ol>
                        </nav>
                        <h4 className="title">Contact Information</h4>
                        <p className="user-details">
                            Jonny Deppy (jnon2@gmail.com)
                        </p>
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
                                    <Link to='/cart'>
                                    <BiArrowBack />    Return to Cart</Link>
                                    <Link className="submit-button" to='cart'>Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'></div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
