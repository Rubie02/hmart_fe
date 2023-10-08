import { NavLink, Link } from "react-router-dom"


const Header = () => {
  return (
    <>
        <header className="header-top-strip py-3">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6">
                        <p>Free Shipping Over $100 & Free Returns</p>
                    </div>
                    <div className="col-6">
                        <p className="text-end"><a href="tel:+8499.999.9999"></a>Hotline: +8499.999.9999</p>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
