import React from 'react'
import { RoadMapData,RoadMapDataLine } from "../common/Helper";
import { RoadmapIcon, RoadmapIconSingle } from '../common/Icons';
import { useTranslation } from 'react-i18next';


const Roadmap = () => {

  const { t } = useTranslation();
  return (
    <div id='roadmap' className=" my-16 md:my-24 xl:my-36">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto">
          <div className='flex flex-wrap justify-between items-center'>
              <div className='lg:w-1/2'>
                  <div>
                    <h2 className="text-center font-bold text-[30px] sm:text-4xl lg:text-5xl 3xl:text-6xl text-blue">
                 {t('road-map')}
                    </h2>
                    {/* <p className="font-medium pt-1 md:pt-0 text-sm sm:text-[15px] text-light_gray leading-[24px] sm:leading-[28px] 3xl:leading-[33px] lg:max-w-[723px]">
                    Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is the future of Money, It is available across multiple Blockchains. Developed by crypto pioneers, aerospace inventors, engineers, data scientist and tech leaders, Adashe establishes a standardized industry framework for trade, finance, data and for adoption of blockchain and crypto.
                    </p> */}
              
                  </div>
                  {/* <div className="flex flex-wrap justify-between pt-6 md:pt-8 xl:pt-14 max-w-[533px] ">
                    {RoadMapData.map((obj, index) => (
                      <div
                        className=" w-1/2  2xl:px-0 pt-4 "
                        key={index}
                      >
                        <div className={` ${index === 3 ?"3xl:pl-10":""} flex items-center justify-start w-full xl:w-[300px]  `}>
                         {obj.img} 
                          <CurrencyIcon />
                          <div className="pl-1 lg:pl-2">
                            <h4 className="font-bold max-[400px]:text-xs pr-2 text-sm md:text-base 3xl:text-xl text-dark_blue sm:leading-10">
                              {obj.heading}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> */}
              </div>
              <div className=' lg:w-1/2 flex justify-center flex-col items-center'>
                <div className='mt-16 lg:mt-0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      '>
                {RoadMapDataLine.map((obj, index) => (
        <div className={`${index === 2 ? "" : index === 1 ? " " : "opacity-40"} flex duration-500`} key={index}>
          {index === 7 ? <RoadmapIconSingle /> : <RoadmapIcon />}

          <p className='text-dark_blue font-semibold text-base pt-2 ps-2'>{t(`roadmap.${obj.key}`)}</p>
        </div>
      ))}
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Roadmap