// import 'flag-icon-css/css/flag-icon.min.css';
import React, { useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector'; // Correct import
import HttpApi from 'i18next-http-backend';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import i18next from "i18next";




i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .use(languageDetector)
  .use(HttpApi)
  .init({
    supportedLang: ['en', 'zh', 'ja', 'ko' ],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false } 
  });


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const Languages = [
    {
      code: 'zh',
      name: 'Chinese',
      country_code: 'cn'
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb'
    },
    {
      code: 'ja',
      name: 'Japanese',
      country_code: 'jp'
    },
  
    {
      code: 'ko',
      name: 'Korea',
      country_code: 'kr'
    },
  
  ];
  



function Translator() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Initialize with the default language

  const changeLanguage = (code) => {
    i18next.changeLanguage(code);
    setSelectedLanguage(code);
  };
  





return(
  <>
  <div className="max-w-[90%]">
    <div className="flex justify-end  mt-[2rem]  ">
      <Menu as="div" className="relative w-28 inline-block ">
        <div>
          <Menu.Button className="flex ">
            <span
              className={`flag-icon flag-icon-${Languages.find(
                (lang) => lang.code === selectedLanguage
              )?.country_code.toLowerCase()} mx-2 `}
              style={{ width: "20px", height: "20px" }}
            ></span>
            <span className="font-bold text-10 -mt-1">
              {Languages.find((lang) => lang.code === selectedLanguage)?.name}{" "}
            </span>
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400 -mt-1"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={React.Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {Languages.map(({ code, name, country_code }) => (
                <Menu.Item key={country_code}>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => changeLanguage(code)}
                    >
                      <span
                        className={`flag-icon flag-icon-${country_code.toLowerCase()} mx-2`}
                      ></span>
                      {name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </div>
  </>
);




}

export default Translator;
