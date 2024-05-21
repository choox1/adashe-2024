import React from "react";
import { smartContractlist, projeectAdhaselist } from "../common/Helper";
import { useTranslation } from "react-i18next";

const SmartContract = () => {
  const { t } = useTranslation();
  return (
    <>
      <div id="service" className="3xl:pb-[50px] my-16 md:mb-24 xl:mb-36 xl:mt-32">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
          <div>
            <h2 className="font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl text-blue">
          {t('Smart-Contract')}
            </h2>
            <p className="font-medium pt-1 md:pt-0 text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] 3xl:leading-[33px] lg:max-w-[570px]">
            {t('our-contract')}
            </p>
          </div>
          <div className="flex flex-wrap justify-between pt-6 md:pt-8  xl:pt-14">
            {smartContractlist.map((obj, index) => (
              <div
                className="sm:w-6/12 xl:w-3/12   2xl:px-0 pt-4"
                key={index}
              >
                <div className="flex items-center  3xl:max-w-[358px">
                  <span>{obj.iconimg}</span>
                  {/* <CurrencyIcon /> */}
                  <div className="pl-4">
                    <h4 className="font-bold text-lg 3xl:text-xl text-dark_blue leading-10">
            
                      {t(`smartContractlist.${obj.heading.props.children}`)}
                    </h4>
                    {/* <p className="text-sm text-light_gray2 font-medium sm:leading-[26px] pt-3 pe-2">
                      {obj.para}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartContract;
