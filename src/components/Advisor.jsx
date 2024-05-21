import React from 'react'
import img1 from "../assets/img/png/advisor1.png"
import { Linkdin } from '../common/Icons'
import {AdvisorData} from "../common/Helper"
import { useTranslation } from "react-i18next";

const Advisor = () => {
  const { t } = useTranslation();
  return (
    <div>
          <div className='pb-10 2xl:pb-[136px] bg-[#f6f9fc]'>
    <div className='container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto'>
        <h3 className='text-blue text-center font-bold text-[30px] sm:text-4xl lg:text-5xl  3xl:text-6xl'>{t('advasory-1')}</h3>
        <p className='text-light_gray text-center text-[15px] max-w-[625px] mx-auto'>{t('advasory-2')}</p>
        <div className='flex justify-center items-center gap-6 rounded-lg mt-8 flex-wrap'>
          <div className='flex gap-6 justify-center xl:justify-between flex-wrap mt-5'>
          {AdvisorData.map((obj, index) => (
            <div key={obj.heading} className='w-[90%] md:w-[48%] xl:w-[23%] group'>
                <div className='overflow-hidden'><img className='w-full group-hover:scale-125 duration-300' src={obj.img} alt="img" /></div>
                <div className='flex items-center justify-between mt-4'>
                    <p className='ff_jost font-bold 2xl:text-xl'> {t(`AdvisorData.${obj.heading}`)}</p>
                   <a href={obj.link} target="_blank" rel="noopener noreferrer" ><Linkdin/></a>
                </div>
            </div>
             ))}
          </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Advisor