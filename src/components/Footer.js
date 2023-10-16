import { Link } from "react-router-dom"
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="newsletter"/>
                <h2 className="text-white mb-0">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
              <input type="text" className="form-control py-1" placeholder="Your Email" aria-label="Your Email" aria-describedby="basic-addon2"/>
              <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Thu Duc, TP. HCM
                </address>
                <a href="tel: +8499.999.9999" className="mt-3 d-block mb-1 text-white">
                +8499.999.9999
                </a>
                <a href="mailto:hmart@gmail.com" className="mt-2 d-block mb-0 text-white">
                hmart@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>

              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQs</Link>
                <Link className="text-white py-2 mb-1">Contacts</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mb-0 text-white">
              <p className="text-center">&copy; {new Date().getFullYear()} | Powered by HMart.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
