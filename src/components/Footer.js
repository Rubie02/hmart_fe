import { Link } from "react-router-dom"


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
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div></div>
            </div>
            <div className="col-2">
              <h4 className="mb-4 text-white">Quick Links</h4>
              <div className="footer-links">
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
              <p className="text-center">&copy; {new Date().getFullYear()} | Powered by HMart</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
