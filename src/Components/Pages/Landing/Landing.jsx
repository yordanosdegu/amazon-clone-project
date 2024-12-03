import React from "react";

import LayOut from '../../../Components/LayOut/LayOut'
import Carousel from '../../Carousel/Carousel'
import Category from '../../Catagory/Category'; 
import Product from '../../Product/Product'; 

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
