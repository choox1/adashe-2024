import React, { useState } from 'react'
import Header from './Header';
import ProjectAdashe from './ProjectAdashe';
import LaunchPads from './LaunchPads';
import CorePartner from './CorePartner';
import SmartContract from './SmartContract';
import LatestNews from './LatestNews';
import Advisor from './Advisor';
import Exchanges from './Exchanges';
import FeaturedOn from './FeaturedOn';
import OurTeam from './OurTeam';
import StayClose from './StayClose';
import Faqs from './Faqs';
import Roadmap from './Roadmap';
import Adse from './Adse';
import Footer from './Footer';
import CountdownTimer from './CountdownTimer';



const Layout = () => {
 


  return (
    <>

      <CountdownTimer  />
      <Header />
     <ProjectAdashe />
      <LaunchPads />
      <Roadmap/>
      <CorePartner />
      <SmartContract />
      <Adse/>
      <Faqs/>
      <OurTeam/>
      <Advisor />
      <LatestNews />
      <Exchanges />
      <FeaturedOn />
      <StayClose/>
      <Footer   />
    </>
  );
}

export default Layout