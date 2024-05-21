import React, { useEffect, useState } from "react";
import groq from "groq";
import { client } from "../utils/client";
import Slider from "react-slick";
import LatestNewsCard from "./LatestNewsCard";

const LatestNewsList = () => {
  const slider = React.useRef(null);

  const [latestNewsList, setLatestNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = groq`*[_type == "post" && publishedAt < now()]`;
      const data = await client.fetch(query);
      setLatestNewsList(data);
    };

    fetchData();
  }, []);

  const settings = {
    dots: latestNewsList.length > 4 ? true : false,
    arrows: latestNewsList.length > 4 ? true : false,
    slidesToShow: 3,
    swipe: latestNewsList.length > 4 ? true : false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider ref={slider} {...settings} className="news-slider">
        {latestNewsList.map((obj, index) => (
          <LatestNewsCard obj={obj} key={index} index={index} />
        ))}
      </Slider>
      {latestNewsList.length > 4 && (
        <>
          <div
            onClick={() => slider?.current?.slickPrev()}
            className="bg-blue w-16 h-16 -translate-y-1/2 absolute top-1/2 flex justify-center items-center rounded-full"
          >
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M13.5349 15.0001L19.7224 21.1876L17.9549 22.9551L9.99991 15.0001L17.9549 7.04508L19.7224 8.81258L13.5349 15.0001Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>

          <button
            className="bg-blue w-16 h-16 right-0 absolute top-1/2 flex justify-center items-center rounded-full -translate-y-1/2"
            onClick={() => slider?.current?.slickNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_2_6421)">
                <path
                  d="M16.4648 14.9999L10.2773 8.81242L12.0448 7.04492L19.9998 14.9999L12.0448 22.9549L10.2773 21.1874L16.4648 14.9999Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default LatestNewsList;
