import React from "react";
import { Carousel } from "react-responsive-carousel";
import {img} from "../Carousel/Img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";




function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />
        })
        }

      </Carousel>
      <div className="hero_id"></div>
    </div>
  );
}

export default CarouselEffect;

