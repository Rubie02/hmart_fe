import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import BlogDetail from './pages/BlogDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='store' element={<OurStore />}/>
            <Route path='product/:id' element={<ProductDetail />}/>
            <Route path='blog' element={<Blog />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='blog/:id' element={<BlogDetail />}/>
            <Route path='compare-product' element={<CompareProduct />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<SignUp />}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
            <Route path='reset-password' element={<ResetPassword />}/>
            <Route path='privacy-policy' element={<PrivacyPolicy />}/>
            <Route path='refund-policy' element={<RefundPolicy />}/>
            <Route path='shipping-policy' element={<ShippingPolicy />}/>
            <Route path='terms-conditions' element={<TermsAndConditions />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
