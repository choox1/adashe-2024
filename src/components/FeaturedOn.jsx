import React from "react";
import img1 from "../assets/img/png/bing-news.png";
import img2 from "../assets/img/png/google-news.png";
import img3 from "../assets/img/png/yahoo-finance.png";
// import img4 from "../assets/img/png/featured4.png";
import { useTranslation } from "react-i18next";

const FeaturedOn = () => {
  const { t } = useTranslation();
  return (
    <div className="py-16 md:py-24 xl:py-[160px]">
      <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
        <h3 className="text-blue text-center font-bold text-[30px] sm:text-4xl ">
        {t('f')}
        </h3>

        <div className="flex gap-6 lg:gap-[110px] 3xl:gap-[65px] justify-center items-center flex-wrap mt-16">
          <img src={img1} width={313} alt="img1" />
          <img src={img2} width={294} alt="img1" />
          <img src={img3} width={391} alt="img1" />
          {/* <img src={img4} width={173} alt="img1" /> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
