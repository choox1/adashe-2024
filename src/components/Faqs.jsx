import React, { useState } from "react";
import { FaqData } from "../common/Helper";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

function Icon({ id, open }) {
  return (
    <svg
      className={`${
        id === open ? "rotate-180" : ""
      } h-3 w-3 sm:h-5 sm:w-5 transition-transform`}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
    >
      <path d="M10 13L0.473721 0.25L19.5263 0.25L10 13Z" fill="#999999" />
    </svg>
  );
}

const Faqs = () => {
  const [open, setOpen] = React.useState(0);
  const { t } = useTranslation();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === openFaqIndex) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <div
      id="faq"
      className="container px-4 md:px-6 xl:px-0 xl:max-w-[1140px] 3xl:max-w-[1580px]  mx-auto md:pb-10 xl:pb-[50px]"
    >
      <h3 className="text-blue text-center font-bold text-[30px] sm:text-4xl lg:text-5xl  3xl:text-6xl mb-10">
        {t("faq")}
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="sm:px-4">
          <div className="lg:pb-4 xl:pb-12 space-y-3">
            {FaqData.map((obj, index) => (
              <Accordion
                type="single"
                collapsible
                className="space-y-3 md:w-[1100px] w-full"
                key={index}
              >
                <AccordionItem
                  value="item-1"
                  className="border-0 bg-neutral-200 px-6 rounded-xl"
                >
                  <AccordionTrigger className="text-left">
                    {t(`FaqData.${obj.heading}`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-left">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: t(`FaqData.${obj.detail}`),
                      }}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              //   </AccordionHeader>
              //   <AccordionBody className=" px-4 sm:px-10 text-[#4c4b4b] leading-[32px] text-xs sm:text-base pb-6 pt-0 sm:py-6">
              //   <div dangerouslySetInnerHTML={{ __html: t(`FaqData.${obj.detail}`)}} />

              //   </AccordionBody>
              // </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
