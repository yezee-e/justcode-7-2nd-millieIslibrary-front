import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DropCard({ drop, value }) {
  const settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 9,
    // slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    rtl: drop === value ? true : false,

    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //       },
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2,
    //       },
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       },
    //     },
    //   ],
  };
  return (
    <Slide>
      <Slider {...settings}>
        {drop.map(item => {
          const { cover_img, title } = item;
          return (
            <div key={title}>
              <img src={cover_img} alt="coverImg" width={125} height={183} />
            </div>
          );
        })}
      </Slider>
    </Slide>
  );
}

export default DropCard;

const Slide = styled.div`
  margin-bottom: 20px;
`;
