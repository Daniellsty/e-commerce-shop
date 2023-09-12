import React from 'react';
import "./HeaderSlider.scss";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImgs from '../../assets/images/slider_img_1.jpg'
import sliderImgs2 from '../../assets/images/slider_img_2.jpg'

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider'>
      <div className='container'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src = {sliderImgs} alt = "" />
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs2} alt = "" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider