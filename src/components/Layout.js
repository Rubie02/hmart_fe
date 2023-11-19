import { Outlet } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </>
  )
}

export default Layout