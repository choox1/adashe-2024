import {
  BountyProgramIcon,
  CurrencyIcon,
  DecentralizedFinanceIcon,
  ExecutableDataIcon,
  FarmingIcon,
  // SalesIcon,
  SmartContractIcon,
  TeamKycIcon,
  TokenIcon,
  TradeFinanceIcon,
  VestingIcon,
  WebsiteAndAppIcon,
} from "./Icons";
import latestNews1 from "../assets/img/png/latest-news-1.png";
import latestNews2 from "../assets/img/png/latest-news-2.png";
import latestNews3 from "../assets/img/png/latest-news-3.png";
import coreimg1 from "../assets/img/svg/coreimg1.svg";
import coreimg2 from "../assets/img/svg/coreimg2.svg";
import coreimg3 from "../assets/img/png/coreimg3.png";
import coreimg4 from "../assets/img/svg/coreimg4.svg";
import coreimg5 from "../assets/img/svg/coreimg5.svg";
// import coreimg6 from "../assets/img/svg/coreimg6.svg";
import coreimg7 from "../assets/img/svg/coreimg7.svg";
import coreimg8 from "../assets/img/svg/coreimg8.png";
import coreimg9 from "../assets/img/svg/coreimg9.png";
import coreimg12 from "../assets/img/svg/coreimg12.png";
import coreimg10 from "../assets/img/svg/auby.svg";
import coreimg11 from "../assets/img/svg/coreimg11.png";
import lpimg1 from "../assets/img/svg/lpimg1.png";
import lpimg2 from "../assets/img/svg/lpimg2.png";
import exchangeim1 from "../assets/img/png/exchange-img-1.png";
import exchangeim2 from "../assets/img/png/exchange-img-2.png";
import exchangeim3 from "../assets/img/png/exchange-img-3.png";
import exchangeim4 from "../assets/img/png/exchange-img-4.png";
import Advisor1 from "../assets/img/png/advisor1.png"
import Advisor2 from "../assets/img/png/advisor2.png"
import Advisor3 from "../assets/img/png/advisor3.png"
import Advisor4 from "../assets/img/png/advisor4.png"
import Team1 from "../assets/img/png/Othniel-Mbamalu.jpg"
import Team2 from "../assets/img/png/Gerald-Tautenhahn.png"
import Team3 from "../assets/img/png/Quivira.jpg" 
import Team4 from "../assets/img/png/Carl-Tautenhahn.png" 
import { useTranslation } from 'react-i18next';

export const Analytics = [
  {
    heading1: "analytic-h1",
    CustomerType: "CustomerType-1"
  },
  {
    heading1: "analytic-h2",
    CustomerType: "CustomerType-2"
  },
  {
    heading1: "analytic-h3",
    CustomerType: "CustomerType-3"
  },
  {
    heading1: "analytic-h4",
    CustomerType: "CustomerType-4"
  },
];

export const projeectAdhaselist = [
  {
    heading: "heading1",
    para: "para1",
    iconimg: <ExecutableDataIcon />,
  },
  {
    heading: "heading2",
    para: "para2",
    iconimg: <DecentralizedFinanceIcon />,
  },
  {
    heading: "heading3",
    para: "para3",
    iconimg: <CurrencyIcon />,
  },
  {
    heading: "heading4",
    para: "para4",
    iconimg: <TradeFinanceIcon />,
  },
];
export const smartContractlist = [
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/LPFarming.sol" target="_blank" rel="noreferrer">Farming</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/LPFarming.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/LPFarming.sol" target="_blank" rel="noreferrer"><FarmingIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/Vester.sol" target="_blank" rel="noreferrer">Vesting</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Vester.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/Vester.sol" target="_blank" rel="noreferrer"><VestingIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/Adashe.sol" target="_blank" rel="noreferrer">Sales</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Adashe.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/Adashe.sol" target="_blank" rel="noreferrer"><ExecutableDataIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/ERC20.sol" target="_blank" rel="noreferrer">Token</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/ERC20.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/ERC20.sol" target="_blank" rel="noreferrer"><TokenIcon /></a>,
  },
];
export const kycList = [
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/LPFarming.sol" target="_blank" rel="noreferrer">Bounty Program</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/LPFarming.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/LPFarming.sol" target="_blank" rel="noreferrer"><BountyProgramIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Vester.sol" target="_blank" rel="noreferrer">Website and Apps</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Vester.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Vester.sol" target="_blank" rel="noreferrer"><WebsiteAndAppIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Adashe.sol" target="_blank" rel="noreferrer">Smart Contract Audit    </a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Adashe.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/Adashe.sol" target="_blank" rel="noreferrer"><SmartContractIcon /></a>,
  },
  {
    heading: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/ERC20.sol" target="_blank" rel="noreferrer">Team KYC</a>,
    // para: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/ERC20.sol">
    // Adashe is a seamless fusion of Tradefi, DeFi, and Data systems. 
    // It is the future of money.</a>,
    iconimg: <a href="https://github.com/Adashe-io/adashe-contracts/blob/master/contracts/token/ERC20.sol" target="_blank" rel="noreferrer"><TeamKycIcon /></a>,
  },
];
export const LatestNewslist = [
  {
    heading: "New Features in Adashe 2.0",
    detail: "View Details",
    img: latestNews1,
  },
  {
    heading: "New Features in Adashe 2.0 ",
    detail: "View Details",
    img: latestNews2,
  },
  {
    heading: "New Features in Adashe 2.0",
    detail: "View Details",
    img: latestNews3,
  },
];
export const OurTeamData = [
  {
    name: "name1",
    designation:"designation1",
    detail: "detail1",
    img: Team1,
    link:"https://www.linkedin.com/in/othnielcrtr/",
  },
  {
    name: "name2",
    designation:"designation2",
    detail: "detail2",
    img: Team2,
    link:"https://www.linkedin.com/in/geraldmonroe1/",
  },
  {
    name: "name3",
    designation:"designation3",
    detail: "detail3",
    img: Team3,
    link:"https://www.linkedin.com/in/damilarequivira/",
  },
  {
    name: "name4",
    designation:"designation4",
    detail: "detail4",
    img: Team4,
    link:"https://www.linkedin.com/in/carlhenly/",
  },
];
export const AdvisorData = [
  {
    heading: "adv-1",
    img: Advisor1,
    link:"https://www.linkedin.com/in/ppapadopoulos/",
  },
  {
    heading: "adv-2",
    img: Advisor2,
    link:"https://www.linkedin.com/in/jongillon/",
  },
  {
    heading: "adv-3",
    img: Advisor3,
    link:"https://www.linkedin.com/in/nicholas-raffin-750878163/",
  },
  {
    heading: "adv-4",
    img: Advisor4,
    link: "https://www.linkedin.com/in/uzochukwu-mbamalu-37111b192/",
  }
];
export const RoadMapData = [
  {
    heading: "Bounty Program",
    img: <BountyProgramIcon/>,
  },
  {
    heading: "Website and Apps",
    img: <WebsiteAndAppIcon/>,
  },
  {
    heading: <a href="https://drive.google.com/file/d/1EpPktOPMHadvwhJETrCIbn37qJiWqI1c/view" target="_blank" rel="noreferrer">Smart Contract Audit</a>,
    img: <a href="https://drive.google.com/file/d/1EpPktOPMHadvwhJETrCIbn37qJiWqI1c/view" target="_blank" rel="noreferrer"><SmartContractIcon /></a>,
  },
  {
    heading: <a href="https://github.com/solidproof/projects/tree/main/2023/Adashe" target="_blank" rel="noreferrer">Team KYC</a>,
    img: <a href="https://github.com/solidproof/projects/tree/main/2023/Adashe" target="_blank" rel="noreferrer"><TeamKycIcon /></a>,
  },
];

export const RoadMapDataLine = [
  {
    key: 'heading-one',
  },
  {
    key: 'heading-two',
  },
  {
    key: 'heading-three',
  },
  {
    key: 'heading-four',
  },
  {
    key: 'heading-five',
  },
  {
    key: 'heading-six',
  },
  {
    key: 'heading-seven',
  },
  {
    key: 'heading-eight',
  },
];
export const AdseDataPie = [
  {
    heading: "h1",
    bgclr:"bg-[#753FF6]"
  },
  {
    heading: "h2",
    bgclr:"bg-[#C61AF1]"
  },
  {
    heading: "h3",
    bgclr:"bg-[#12D8E5]"
  },
  {
    heading: "h4",
    bgclr:"bg-[#110DD8]"
  },
  {
    heading: "h5",
    bgclr:"bg-[#3FB4F6]"
  },
  
];
export const AdseData = [
  {
    heading:"heading-1",
    subheading: "subheading-1",
    
  },
  {
    heading:"heading-2",
    subheading: "subheading-2",
  
  },
  {
    heading:"heading-3",
    subheading: "subheading-3",
    
  },
  {
    heading:"heading-4",
    subheading: "subheading-4",
 
  },
  {
    heading:"heading-5",
    subheading: "subheading-5",
  },
  
];
export const CorePartnerData = [
  {
    heading: "heading1",
    detail: "detail1",
    img: coreimg1,
  },
  {
    heading: "heading2",
    detail:  "detail2",
    img: coreimg2,
  },
  {
    heading:"heading3",
    detail: "detail3",
    img: coreimg12,
  },
  {
    heading: "heading4",
    detail: "detail4",
    img: coreimg4,
  },
  {
    heading: "heading5",
    detail: "detail5",
    img: coreimg5,
  },
  {
    heading: "heading6",
    detail: "detail6",
    img: coreimg10,
  },
  {
    heading: "heading7",
    detail: "detail7",
    img: coreimg7,
  },
  {
    heading: "heading8",
    detail: "detail8",
    img: coreimg8,
  },
  {
    heading: "heading9",
    detail: "detail9",
    img: coreimg9,
  },
];
export const LaunchPadData = [
  // {
  //   heading: "Raze.Finance",
  //   detail: "A Fund raising platform",
  //   img: coreimg3,
  // },
  {
    heading_one: "heading1",
    detail_one: "detail1",
    img: lpimg1,
  },
  {
    heading_one: "heading2",
    detail_one: "detail2",
    img: lpimg2,
  },
  {
    heading_one: "heading3",
    detail_one: "detail3",
    img: coreimg11,
  },
];
export const ExchangeData = [
  {
    heading: <a href="#">h1</a>,
    detail: <a href="#">d1</a>,
    img: exchangeim1,
  },
  {
    heading: <a href="#">h2</a>,
    detail: <a href="#">d2</a>,
    img: exchangeim2,
  },
  {
    heading: <a href="#">h3</a>,
    detail: <a href="#">d3</a>,
    img: exchangeim3,
  },
  {
    heading: <a href="#">h4</a>,
    detail: <a href="#">d4</a>,
    img: exchangeim4,
  },
  // {
  //   heading: "Latoken",
  //   detail: "Comprehensive Travel Solution",
  //   img: exchangeim1,
  // },
  // {
  //   heading: "PalRemit",
  //   detail: "Borderless, Cheap remittances",
  //   img: exchangeim2,
  // },
  // {
  //   heading: "Raze Finance",
  //   detail: "A Fund raising platform",
  //   img: exchangeim3,
  // },
  // {
  //   heading: "Raze Finance",
  //   detail: "A Fund raising platform",
  //   img: exchangeim4,
  // },
];
export const FaqData = [
  {
    heading: "faq-h1",
    detail: "faq-d1", 
  },
  {
    heading: "faq-h2",
    detail: "faq-d2", 
  },
  {
    heading: "faq-h3",
    detail: "faq-d3", 
  },
  {
    heading: "faq-h4",
    detail: "faq-d4", 
  },
  {
    heading: "faq-h5",
    detail: "faq-d5", 
  },
  {
    heading: "faq-h6",
    detail: "faq-d6", 
  },
  {
    heading: "faq-h7",
    detail: "faq-d7", 
  },
  {
    heading: "faq-h8",
    detail: "faq-d8", 
  },
  // {
  //   heading: "What are the applications for the Adashe Sat/Blockchain?",
  //   detail: `Applications for the Adashe Sat/Blockchain include:
  //   <br/>- Transactions
  //   <br/> - Data Federation and virtualization
  //   <br/>- Multisignature wallet host
  //   <br/>- Supply Chain
  //   <br/>- Satellite and blockchain-enhanced IoT networks
  //   <br/>- Encrypted Messaging`, 
  // },
];
