import React, { useState } from "react";
import contactUSImg from "../assets/img/png/contact-us-img.png";
import { Arrow } from "../common/Icons";
import emailjs, { init } from "@emailjs/browser";
import LoaderSpiner from "./LoaderSpiner";
import Swal from "sweetalert2";
import logo from "../assets/img/png/whitelogo.png";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

init("f4rTZbXETdkVNwJVR");
const ContactUs = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [letsCreate, setLetsCreate] = useState(initialState);
  const [isLoader, setLoader] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const handleSubmitLetsCreate = (event) => {
    event.preventDefault();
    setLoader(true);
    setIsSubmitting(true);
    emailjs
      .send("service_t781g1m", "template_7niwqzu", {
        name: letsCreate.name,
        email: letsCreate.email,
        message: letsCreate.message,
      })
      .then(
        () => {
          setLoader(false);
          setLetsCreate(initialState);
          setIsSubmitting(false);
          Swal.fire({
            icon: "success", 
            title: "Thanks for Contacting Us",
            text: "we will get in touch with you soon.",
            // icon: "error",
            confirmButtonText: "ThankYou",
          });
        },
        (error) => {
          setIsSubmitting(false);
          Swal.fire({
            title: "Error!",
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
          setLoader(false);
          console.log(error);
        }
      );
  };
  return (
    <>
      <div className="lg:h-screen lg:h-auto flex items-center">
        <div className="flex flex-wrap items-center w-full relative">
        <div className='container 3xl:max-w-[1800px] px-4 items-center absolute top-8 left-1/2 -translate-x-1/2 z-10 flex justify-between mx-auto'>
      <Link to='/'>
          <img
            className=" z-10 top-8 left-5 w-[180px] xl:w-[260px]"
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
                Contact Us
              </h4>
              <p className="font-normal text-sm md:text-base leading-6 3xl:leading-8  text-black">
                We're here to help! Please feel free to contact us with any
                questions or feedback you have.
              </p>

              <form
                className="pt-6 md:pt-8 xl:pt-10"
                onSubmit={(event) => handleSubmitLetsCreate(event)}
              >
                <div className="flex flex-col">
                  <label className="font-medium text-sm md:text-base  text-black">
                    Full Name
                  </label>
                  <input
                    required
                    value={letsCreate.name}
                    onChange={(event) =>
                      setLetsCreate({ ...letsCreate, name: event.target.value })
                    }
                    type="text"
                    placeholder="John Doe"
                    className="text-sm text-black font-normal placeholder:text-sm placeholder:text-black placeholder:font-normal outline-none rounded-[10px] border-[0.5] border-[#c6c6c6] shadow-form_shadow bg-[#ededed] p-4 mt-3.5"
                  />
                </div>
                <div className="flex flex-col pt-6 md:pt-8 xl:pt-11">
                  <label className="font-medium text-sm md:text-base  text-black">
                    Email Address
                  </label>
                  <input
                    required
                    value={letsCreate.email}
                    onChange={(event) =>
                      setLetsCreate({
                        ...letsCreate,
                        email: event.target.value,
                      })
                    }
                    type="emial"
                    placeholder="mail@example.com"
                    className="text-sm text-black font-normal placeholder:text-sm placeholder:text-black placeholder:font-normal outline-none rounded-[10px] border-[0.5] border-[#c6c6c6] shadow-form_shadow bg-[#ededed] p-4 mt-3.5"
                  />
                </div>
                <div className="flex flex-col pt-6 md:pt-8 xl:pt-11">
                  <label className="font-medium text-sm md:text-base  text-black">
                    Message
                  </label>
                  <textarea
                    value={letsCreate.message}
                    onChange={(event) =>
                      setLetsCreate({
                        ...letsCreate,
                        message: event.target.value,
                      })
                    }
                    className="h-[132px] text-sm text-black font-normal placeholder:text-sm placeholder:text-black placeholder:font-normal outline-none rounded-[10px] border-[0.5] border-[#c6c6c6] shadow-form_shadow bg-[#ededed] p-4 mt-3.5"
                  />
                </div>

                <button
                disabled={isSubmitting}
                  type="submit"
                  className={`${isLoader ? " pointer-events-none opacity-40" : ""} w-[198px] justify-center whitespace-nowrap flex items-center gap-4 ff_jost bg-common-gradient text-lg sm:text-base text-white group font-bold py-5 px-10 rounded-[36px] mt-6 xl:mt-10`}
                >
                  {isLoader ? <LoaderSpiner /> : " Contact Us"}
                  <span  className={`${isLoader ? "hidden pointer-events-none opacity-40" : ""} duration-500 group-hover:translate-x-2`}>
                    <Arrow />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
