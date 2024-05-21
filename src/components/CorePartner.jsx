import React from "react";
import img1 from "../assets/img/svg/coreimg2.svg";
import { CorePartnerData } from "../common/Helper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";


const CorePartner = () => {
  var settings = {
    dots: false,
    arrows:false, 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: true, 
          verticalSwiping: true, 
        }
      }
    ]
  };
  const { t } = useTranslation();
  return (
    <div className=" bg-component-gradient py-[136px] overflow-y-scroll max-h-screen">
      <div className="px-0">
        <div className="px-4">
          <h3 className="text-white text-center font-bold text-[30px] sm:text-4xl  lg:text-5xl  3xl:text-6xl">
          {t('Project-Partners')}
          </h3>
          <p className="text-[#FEFEFE] text-center text-[15px] max-w-[691px] mx-auto">
{t('Project-body')}
          </p>
        </div>
   
         
        <div className="sm:container sm:px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto mt-10">
        
        <Slider {...settings}>
          {CorePartnerData.map((obj, index) => (
              <div className="flex justify-center items-center px-4 3xl:px-0 py-2">
                  <div className="flex items-center gap-6 bg-[#6a59bf59] rounded-lg p-3 max-w-[452px] w-full">
                    <img className="w-[80px] 3xl:w-[106px]" src={obj.img} alt="img1" />
                    <div>
                      <h4 className="text-white text-xl font-bold">
                      
                       {t(`CorePartnerData.${obj.heading}`)}
                      </h4>
                      <p className="text-[#FEFEFE] text-sm pt-2">

                        {t(`CorePartnerData.${obj.detail}`)}
                      </p>
                    </div>
                  </div>
              </div>
            ))}
             </Slider>
        </div>
      </div>
    </div>
  );
};

export default CorePartner;
