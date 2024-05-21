import React from "react";
import LatestNewsList from "./LatestNewsList";
import { useTranslation } from "react-i18next";

const LatestNews = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="news" className="my-16 md:my-24 xl:my-36 3xl:my-[162px]">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
          <div>
            <h2 className="font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl text-blue">
         {t('news')}
            </h2>
          </div>
          <div>
            <LatestNewsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
