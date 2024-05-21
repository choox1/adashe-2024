import React, { useState } from "react";
import img1 from "../assets/img/svg/coreimg2.svg";
import { ExchangeData } from "../common/Helper";
import { useTranslation } from "react-i18next";


const Exchanges = () => {
  const [displayItems, setDisplayItems] = useState(4); // Initial number of items to display
  const { t } = useTranslation();

  const handleToggleItems = () => {
    if (displayItems === 4) {
      setDisplayItems(4); // Show more items
    } else {
      setDisplayItems(4); // Show fewer items
    }
  };
  return (
    <div className=" bg-component-gradient py-[136px]">
      <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1240px] 3xl:max-w-[1680px] mx-auto ">
        <h3 className="text-white text-center font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl">
{t('exchange')}
        </h3>
        <p className="text-[#FEFEFE] text-center text-[15px] max-w-[691px] mx-auto">
        {t('exchange-body')}
        </p>
        <div className="flex justify-center items-center gap-6 rounded-lg mt-8 flex-wrap">
      {ExchangeData.slice(0, displayItems).map((obj, index) => (
        <div className="w-[90%] md:w-[48%] xl:w-[23%]" key={index}>
          <div className="flex items-center gap-6 bg-[#6a59bf59] rounded-lg p-3 ">
            <img className="w-[80px] 3xl:w-[106px]" src={obj.img} alt={`img${index}`} />
            <div>
              <h4 className="text-white 3xl:text-xl font-bold">{t(`ExchangeData.${obj.heading.props.children}`)}</h4>
              <p className="text-[#FEFEFE] text-xs 3xl:text-sm pt-2">{t(`ExchangeData.${obj.detail.props.children}`)}</p>
            </div>
          </div>
        </div>
      ))}
      {/* {ExchangeData.length > 4 && (
        <button className=" bg-load-more text-xs font-bold px-7 py-[10px] rounded-3xl mt-8" onClick={handleToggleItems}>
          {displayItems === 4 ? 'Load more' : 'View less'}
        </button>
      )} */}
    </div>

      </div>
    </div>
  );
};

export default Exchanges;
