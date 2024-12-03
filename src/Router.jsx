import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Components/Pages/Landing/Landing";
import Cart from "./Components/Pages/Cart/Cart";
import SignUp from "./Components/Pages/Auth/SignUp";
import Payment from "./Components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Orders/Order";
import Result from "./Components/Pages/Results/Result"
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail'

function Routering() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/category/:categoryName" element={<Result />} />
          <Route path="/products/:productsId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routering