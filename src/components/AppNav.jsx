import React, { useEffect, useState } from "react";
import Logo from "../assets/img/svg/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useTranslation } from "react-i18next";

const AppNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { t } = useTranslation();

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow_hidden");
    };
  }, [isNavOpen]);
  return (
    <>
      <nav className="shadow-nav_shadow py-3 ">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1240px] 3xl:max-w-[1580px] mx-auto ">
          <div className="flex items-center justify-between">
            <img
              className="max-w-[160px] lg:max-w-[200px] 3xl:max-w-[260px] cursor-pointer"
              src={Logo}
              alt="logo"
            />
            <div className="flex gap-12 items-center">
              <ul
                className={`${
                  isNavOpen ? "left-0 z-10" : "-left-full z-10"
                } flex gap-12 absolute w-full top-0 h-full items-center justify-center lg:justify-end xl:justify-center flex-col bg-component-gradient lg:bg-none lg:!bg-transparent lg:static lg:flex-row transition-all duration-300 ease-in-out`}
              >
                <li>
                  <a onClick={toggleNav}
                    href="#about"
                    className="text-lg sm:text-xl lg:text-sm xl:text-base 3xl:text-[17px] text-white lg:text-light_black lg:hover:text-blue font-medium after:absolute after:w-0 after:hover:w-full after:duration-300 after:bottom-[-2px] after:left-0  after:hover:bg-blue after:bg-black after:h-[1.5px] after:rounded-full relative"
                  >
                  {t('nav1')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav}
                    href="#service"
                    className="text-lg sm:text-xl lg:text-sm xl:text-base 3xl:text-[17px] text-white lg:text-light_black lg:hover:text-blue font-medium after:absolute after:w-0  after:hover:w-full after:duration-300 after:bottom-[-2px] after:left-0 after:hover:bg-blue  after:bg-black after:h-[1.5px] after:rounded-full relative"
                  >
                     {t('nav2')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav}
                    href="#roadmap"
                    className="text-lg sm:text-xl lg:text-sm xl:text-base 3xl:text-[17px] text-white lg:text-light_black lg:hover:text-blue font-medium after:absolute after:w-0  after:hover:w-full after:duration-300 after:bottom-[-2px] after:left-0 after:hover:bg-blue  after:bg-black after:h-[1.5px] after:rounded-full relative"
                  >
                    {t('nav3')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav}
                    href="#team"
                    className="text-lg sm:text-xl lg:text-sm xl:text-base 3xl:text-[17px] text-white lg:text-light_black lg:hover:text-blue font-medium after:absolute after:w-0  after:hover:w-full after:duration-300 after:bottom-[-2px] after:left-0 after:hover:bg-blue  after:bg-black after:h-[1.5px] after:rounded-full relative"
                  >
                      {t('nav4')}
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav}
                    href="#faq"
                    className="text-lg sm:text-xl lg:text-sm xl:text-base 3xl:text-[17px] text-white lg:text-light_black lg:hover:text-blue font-medium after:absolute after:w-0  after:hover:w-full after:duration-300 after:bottom-[-2px] after:left-0 after:hover:bg-blue  after:bg-black after:h-[1.5px] after:rounded-full relative"
                  >
                      {t('nav5')}
                  </a>
                </li>
                <li>
                  <Link to='/buy-token' className="lg:hidden whitespace-nowrap bg-common-gradient text-white font-bold py-3 px-8 2xl:px-11 rounded-[36px] after:absolute after:w-full  after:hover:w-full after:duration-300 after:top-0 after:z-10 after:left-0   after:h-full relative">
                  {t('nav6')}
                  </Link>
                </li>
              </ul>
              <button onClick={toggleNav} className="lg:hidden z-10">
                <FontAwesomeIcon
                  className={isNavOpen ? "text-white" : ''}
                  icon={isNavOpen ? faTimes : faBars}
                  size="2x"
                />
              </button>
              <Link to='/buy-token'  className="hidden lg:flex items-center justify-center whitespace-nowrap bg-white hover:text-blue text-white border-2 border-blue font-bold py-3 px-8 2xl:px-11 rounded-[36px] relative after:absolute after:bg-common-gradient after:top-0 after:left-0 after:rounded-[36px] w-[200px] overflow-hidden after:hover:-left-full transition-all after:duration-300 ease-in-out after:z-[-1] z-[4] after:w-full after:h-full">
              {t('nav6')}
              </Link>

              {/* <DarkModeToggle/> */}
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNav;


