import './global.css'
import './media.css'
import React, { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import NotExist from './pages/NotExist';

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/AboutUs/About'))
const Contact = lazy(() => import('./pages/ContactUs/Contact'))
const Shop = lazy(() => import('./pages/Shop/Shop'))
const Login = lazy(() => import('./pages/Login/Login'))
const Register = lazy(() => import('./pages/Register/Register'))
const WishList = lazy(() => import('./pages/WishList/WishList'))
const Cart = lazy(() => import('./pages/Cart/Cart'))
const SingleProduct = lazy(() => import('./pages/SingleProduct/SingleProduct'))
const AddProduct = lazy(() => import('./pages/AddProduct/AddProduct'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wish" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Route>
        <Route path="*" element={<NotExist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;