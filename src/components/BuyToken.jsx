import React from 'react'
import contactUSImg from "../assets/img/png/buy-coin.jpg";
import logo from "../assets/img/png/whitelogo.png";
import { Arrow } from "../common/Icons";
import { Link } from "react-router-dom";
// import DarkModeToggle from './DarkModeToggle';

const BuyToken = () => {
  return (
    <div className="lg:h-screen flex items-center">
    <div className="flex flex-wrap items-center w-full relative">
    <div className='container 3xl:max-w-[2400px] px-4 items-center absolute top-8 left-1/2 -translate-x-1/2 z-10 flex justify-between mx-auto'>
      <Link to='/'>
          <img
            className="z-10 2xl:mt-4 4xl:mt-8 top-8 left-5 w-[180px] xl:w-[360px]"
            src={logo}
            alt="contact-US-Img"
          />
          </Link>
      {/* <div className=' z-10 top-8 right-5'><DarkModeToggle/></div> */}
    </div>
      <div className="w-full lg:w-6/12 lg:block relative">
        <img
          className="w-full h-full object-contain"
          src={contactUSImg}
          alt="contact-US-Img"
        />
       
   
      </div>
      <div className="sm:w-10/12 mx-auto lg:w-6/12 py-6 lg:py-0">
        <div className="container px-6 xl:px-0 xl:max-w-[580px] 3xl:max-w-[630px] mx-auto">
          <h4 className="text-2xl md:text-[35px] xl:text-[40px] 3xl:text-4xl font-bold text-[#4B3BE4]">
          Buy Token
          </h4>
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8  text-black">
          ADSE bought on Pink Sale will be available to buyers immediately.. US citizens and OFAC-sanctioned countries are strictly prohibited from participating in this sale.
          </p>

          <h6 className="text-xl xl:text-[25px] font-bold text-[#4B3BE4] mt-10">
          Instructions
          </h6>
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8 text-black">
              {/* If you are a US citizen then you must participate in our sale by buying our token via a SAFT on Raze.finance, US citizens are limited to this option. */}
          </p><br/>

          {/* <p>
            Buyers who use Raze have more options for purchase including ACH wire transfer, ERC 20 USDC crypto, and credit cards.
          </p><br/>
          <p>Buyers using Raze can buy at a 20% discount compared to Pinksale, minimum purchase on Raze is $10,000</p><br/>
          <p>
              All buyers using Raze have to be KYC’d.
          </p>
            <button  className="whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-medium py-4 lg:py-5 px-6 lg:px-10 rounded-[36px] mt-3">
            Raze.Finance
              <span className=" duration-500 group-hover:translate-x-2">
                <Arrow />
              </span>
            </button> */}
 
          {/* <h6 className="text-xl   xl:text-[25px] font-bold text-[#4B3BE4] mt-10">
          {For Int Citizens Only}
          </h6> */}
          <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8  text-black">
          For our Pink Sale Fair Launch, buyers can participate by via the Pink Sale website linked below, where they would connect their crypto wallet including MetaMask, Trust Wallet, WallectConnect, SafePal, MathWallet and TokenPocket, etc.
          </p>

            <a href="https://www.pinksale.finance/launchpad/0xdF9Cb97f9F3CE7E589F184bba61e96722C1B183C?chain=ETH" target="_blank" rel="noreferrer" className="whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-medium py-4 lg:py-5 px-6 lg:px-10 rounded-[36px] mt-3" >
            Pink Sale 
              <span className="duration-500 group-hover:translate-x-2">
                  <Arrow />
              </span>
            </a>

        </div>
      </div>
    </div>
  </div>
  )
  
}

export default BuyToken