import React from "react";
import Slider from "react-slick";
const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const images = [
  "./banners/banner1.png",
  "./banners/banner2.png",
  "./banners/banner3.png",
];

const BannerSlide = () => {
  return (
    <div>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img className="h-[420px] w-[880px] ml-1 rounded-3xl" src={imageUrl} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlide;