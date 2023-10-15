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
            <Route path='blog' element={<Blog />}/>
            <Route path='compare-product' element={<CompareProduct />}/>
            <Route path='wishlist' element={<WishList />}/>
            <Route path='login' element={<Login />}/>
            <Route path='signup' element={<SignUp />}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
