import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='h-[500px]'> {/* Sabit yükseklik verildi */}
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabilar Burada</div>
            <div className='text-lg my-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolor, molestias commodi, aliquid quas, corporis ad et incidunt ipsum ab consequatur omnis necessitatibus amet nesciunt maiores voluptatibus totam earum non.
            </div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Incele</div>
          </div>
          <img className='w-full h-[400px] object-cover' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17d79451-f6f2-4b5e-94ee-5c9ba460c2ef/AIR+MAX+DN+OLY.png' alt='Air Max' />
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabilar Burada</div>
            <div className='text-lg my-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni dolor, molestias commodi, aliquid quas, corporis ad et incidunt ipsum ab consequatur omnis necessitatibus amet nesciunt maiores voluptatibus totam earum non.
            </div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>Incele</div>
          </div>
          <img className='w-full h-[400px] object-cover' src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/28d43163-2879-40bb-985b-de101007c657/custom-pegasus-trail-gtx-by-you.png' alt='Pegasus Trail' />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
