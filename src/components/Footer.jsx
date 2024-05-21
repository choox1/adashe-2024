// import { facebook, linkedin } from "fontawesome";
import React, { useState } from "react";
import abujaNigeria from "../assets/img/png/neigeri.png";
import Star from "../assets/img/png/start-img.png";
import auditor from "../assets/img/png/solidppfo.png";
import footerLogo from "../assets/img/svg/Logo.svg";
import twitter from "../assets/img/svg/twitter.svg";
import facebook from "../assets/img/svg/facebook.svg";
import linkedin from "../assets/img/svg/linkedin.svg";
import linktree from "../assets/img/png/linktree.png";
import emailjs, { init } from "@emailjs/browser";
import LoaderSpiner from "./LoaderSpiner";
import Swal from "sweetalert2";
import { Telegram } from "../common/Icons";
import { useTranslation } from "react-i18next";
init("f4rTZbXETdkVNwJVR");

const Footer = () => {
  const { t } = useTranslation();
  const initialState = {
    email: "",
  };
  const [letsCreate, setLetsCreate] = useState(initialState);
  const [isLoader, setLoader] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const titleText = t('title-swal');
  const text = t('text-swal');
  const confirmButtonText = t('confirmButtonText');
 const error = t('error');
 const textError = t('error-text');
 const confrimErrorBtn = t('confirmButtonText-error');

  const handleSubmitLetsCreate = (event) => {
    event.preventDefault();
    setLoader(true);
    setIsSubmitting(true);
    
    emailjs
      .send("service_t781g1m", "template_7niwqzu", {
        email: letsCreate.email,
      })
      .then(
        () => {
          setLoader(false);
          setLetsCreate(initialState);
          setIsSubmitting(false);
          Swal.fire({
            icon: "success",
            title: titleText,
            text: text,
            // icon: "error",
            confirmButtonText: confirmButtonText,
          });
        },
        (error) => {
          setIsSubmitting(false);
          Swal.fire({
            title: error ,
            text: textError ,
            icon: "error",
            confirmButtonText: confrimErrorBtn,
          });
          setLoader(false);
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className="bg-[#f5f9ff]">
        <div className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px] mx-auto py-10 sm:py-14 lg:py-[72px]">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-10/12 lg:w-4/12 ">
              <img
                className="md:hidden max-w-[200px]"
                src={footerLogo}
                alt="footer-Logo"
              />
              <p className="font-medium text-lg text-dark_gray pt-4 md:pt-0">
               {t('footer-text')}
              <div className="pt-5 gap-4 flex items-center">
                {/* Twitter Link */}
                <a
                  href="https://x.com/adashefndn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="hover:scale-110 duration-500" src={twitter} alt="Twitter" />
                </a>

                {/* Telegram Link */}
                <a
                  className="pl-4 md:pl-5 hover:scale-110 duration-500"
                  href="https://t.me/adashefndn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Telegram className="hover:scale-110 duration-500" alt="Telegram" />
                </a>

                {/* Linktree Link */}
                <a
                  href="https://linktr.ee/adashefndn" // Corrected Link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="hover:scale-110 duration-500" src={linktree} alt="Linktree" width={70} height={70} />
                </a>

                {/* Uncomment and update this section if needed for Facebook or LinkedIn
                <a
                  className="pl-4 md:pl-5"
                  href="https://www.example-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="hover:scale-110 duration-500" src={linkedin} alt="LinkedIn" />
                </a>
                */}
              </div>
            </p>

            </div>
            <div className="w-full lg:w-7/12 xl:w-6/12 pt-5 lg:pt-0 flex justify-between">
              <div className="flex w-full  max-w-[600px]:flex-wrap justify-between  ">
                <ul className="pt-6 sm:pt-0 flex-1">
                  <li className="text-lg text-dark_blue4 font-medium">
                  {t('SITEMAP')}
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#about"
                      className="text-base text-dark_black2 font-medium "
                    >
                    {t('About')}
                    </a>
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#service"
                      className="text-base text-dark_black2 font-medium"
                    >
                      {t('Services')}{" "}
                    </a>
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#roadmap"
                      className="text-base text-dark_black2 font-medium"
                    >
                      {t('Roadmap-t')}
                    </a>
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#team"
                      className="text-base text-dark_black2 font-medium"
                    >
                      {t('Team-1')}
                    </a>
                  </li>
                </ul>
                <ul className="pt-6 sm:pt-0 flex-1">
                  <li className="text-lg text-dark_blue4 font-medium">
                   {t('COMPANY')}
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="https://adashe.io"
                      className="text-base text-dark_black2 font-medium "
                    >
                   {t('Privacy-Policy')}
                    </a>
                  </li>
                  {/* <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="https://linktr.ee/adashecrypto" target="_blank" rel="noreferrer"
                      className="text-base text-dark_black2 font-medium "
                    >
                      Linktree{" "}
                    </a>
                  </li> */}
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#news"
                      className="text-base text-dark_black2 font-medium "
                    >
                      {t('Latest-News')}
                    </a>
                  </li>
                  <li className="pt-4 hover:translate-x-1 duration-300 hover:opacity-40">
                    <a
                      href="../#faq"
                      className="text-base text-dark_black2 font-medium "
                    >
                      {t('FAQs-1')}
                    </a>
                  </li>
                </ul>
                <ul className="pt-6  sm:pt-0 flex-1 sm:flex-none">
                  <li className="text-lg text-dark_blue4 font-medium">
                   {t('k-y')}
                  </li>
                  {/* <li className="flex items-center sm:justify-start pt-4 group">
                    <img src={abujaNigeria} alt="Abuja-Nigeria" />
                    <a
                      href="#"
                      className="text-base text-dark_black2 font-medium pl-2 group-hover:translate-x-1 group-hover:opacity-40 duration-300"
                    >
                      Abuja Nigeria
                    </a>
                  </li> */}
                  <li className="flex items-center justify-center sm:justify-start pt-4 group">
                    <a href="https://solidproof.io/" target="_blank" rel="noreferrer noopener"><img className="h-auto max-w-full w-[150px]" src={auditor} padding-left="50px" width="30%" alt="star" /></a>
                    {/* <a
                      href="#"
                      className="text-base text-dark_black2 font-medium pl-2 group-hover:translate-x-1 group-hover:opacity-40 duration-300"
                    >
                      Palos Verdes, California
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between pt-10 sm:pt-12 lg:pt-16 xl:pt-20">
            <div className="md:w-4/12">
              <img
                className="hidden md:block"
                src={footerLogo}
                alt="footer-Logo"
              />
              <p className="hidden md:block pt-2.5 text-base md:text-xl text-dark_gray first-letter font-medium">
                {" "}
                © {new Date().getFullYear()} {t('adashe')}
              </p>

          

            </div>
            <div className="md:w-6/12 xl:w-5/12     pt-5">
              <div className="md:flex md:justify-end">
                <div>
                  <p className="text-lg md:text-[21px] text-[#7c7a7a] font-medium">
                   {t('news-letter')}
                  </p>
                  <form
                    onSubmit={(event) => handleSubmitLetsCreate(event)}
                    className="w-full overflow-hidden flex bg-white my-4 md:my-5 border border-[#d7d7d7] rounded-[28px]"
                  >
                    <input
                      required
                      value={letsCreate.email}
                      onChange={(event) =>
                        setLetsCreate({
                          ...letsCreate,
                          email: event.target.value,
                        })
                      }
                      type="email"
                      placeholder={t('placeholder')}
                      className="text-sm outline-none w-full pl-3.5 py-3"
                    />
                    <button  disabled={isSubmitting} className="py-[13px] px-9 text-white bg-common-gradient text-base rounded-[28px]">
                    {isLoader ? <LoaderSpiner /> : <span>{t('Subscribe')}</span>}
                    </button>
                  </form>
                  <p className="text-sm text-[#7c7a7a] font-medium">
                  {t('weekly-update')}
                  </p>
                </div>
              </div>
              <div className="text-center">
                {" "}
                <p className="md:hidden pt-2.5 text-base md:text-xl text-dark_gray first-letter font-medium">
                  {" "}
                  © 2023 adashe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
