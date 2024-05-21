import React from 'react';
import { Analytics } from '../common/Helper';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  // Replace with your YouTube video URL
  const youtubeVideoUrl = "https://www.youtube.com/embed/dduJzZrEQKs";
  const { t } = useTranslation();
  return (
    <div className="flex-grow flex items-center">
      <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1240px] 3xl:max-w-[1580px] mx-auto py-10">
        <div className="flex flex-wrap-reverse items-center justify-between ">
          <div className="w-full xl:w-1/2 order-2 xl:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[55px] 3xl:text-7xl font-bold text-blue">
            {t('title')}
            </h1>
            <p className="font-medium text-sm 3xl:text-base leading-6  3xl:leading-9 max-w-[530px] 3xl:max-w-[691px] text-light_gray">
          {t('project')}
            </p>
            <div className="flex max-[700px]:flex-col gap-3 mt-4 xl:mt-6 3xl:mt-7">
              <Link to='/buy-token' className="max-[700px]:w-full text-center   items-center justify-center whitespace-nowrap bg-white hover:text-blue text-white border-2 border-blue font-bold py-3 px-8 2xl:px-11 rounded-[36px] relative after:absolute after:bg-common-gradient after:top-0 after:left-0 after:rounded-[36px] w-[200px] overflow-hidden after:hover:-left-full transition-all after:duration-300 ease-in-out after:z-[-1] z-[4] after:w-full after:h-full text-xs md:text-sm 3xl:text-base">
              {t('buy_token')}
              </Link>
              <Link to='https://adashe.gitbook.io/adashe-gitbook/' target="_blank" 
              rel="noopener noreferrer" className="whitespace-nowrap overflow-hidden text-center hover:after:left-[0%] after:duration-300 group-hover relative after:text-white after:-left-full after:top-0 after:z-10 after:content-['WHITEPAPER'] after:flex after:justify-center after:items-center after:absolute after:bg-common-gradient after:w-full after:h-full  border-[2px] text-xs md:text-sm 3xl:text-base  text-dark_blue3  border-[#4F56EF] font-bold py-3 px-10 sm:px-11 after:rounded-[36px] rounded-[36px]">
               {t('white_paper')}
              </Link>
              {/* <button className="whitespace-nowrap overflow-hidden hover:after:left-[0%] after:duration-300 group-hover relative after:text-white after:-left-full after:top-0 after:z-10 after:content-['WHITEPAPER'] after:flex after:justify-center after:items-center after:absolute after:bg-common-gradient after:w-full after:h-full  border-[2px] text-xs md:text-sm 3xl:text-base  text-dark_blue3  border-[#4F56EF] font-bold py-3 px-10 sm:px-11 after:rounded-[36px] rounded-[36px]">
                <span className="group-hover:translate-x-8 transition-all -duration-500 ease-in-out">
                  WHITEPAPER
                </span>
              </button> */}
              
            </div>
          </div>
          
          <div className="w-full xl:w-1/2 flex justify-center order-1 xl:order-2 pt-6 lg:pt-8">
            <iframe
              width="100%"
              style={{ height: "390px" }} // You may adjust the height as needed
              className="rounded-2xl"
              src={youtubeVideoUrl}
              title="Project Adashe"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 sm:mt-12 lg:mt-16 xl:mt-[70px]">
          {Analytics.map((obj, index) => (
            <div
              key={index}
              className="relative text-center w-full sm:w-1/2 lg:w-1/4 pt-3"
            >
              <h4 className=" font-extrabold text-2xl 2xl:text-[32px] 3xl:text-3xl text-dark_blue">
       
              {t(`Analytics.${obj.heading1}`)}
              </h4>
              <p className="text-base font-medium text-light_gray2 pt-2">
              {t(`Analytics.${obj.CustomerType}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
