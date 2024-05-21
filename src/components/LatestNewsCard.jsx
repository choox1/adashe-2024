import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../utils/client";

const LatestNewsCard = ({ obj, index }) => {
  console.log(obj);
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  const handleExpand = (index) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  return (
    <>
      <a href={obj.postlink} target="_blank">
        <article
          className={`rounded-xl overflow-hidden bg-white shadow-new group`}
        >
          <div className="overflow-hidden">
            <img
              className="w-full group-hover:scale-125 duration-300"
              src={urlFor(obj.mainImage.asset._ref).url()}
              alt="dfgthbn"
            />
          </div>

          <div className="p-8">
            <h4 className="font-bold text-lg md:text-xl 3xl:text-2xl text-dark_black pb-3">
              {obj.title}
            </h4>
            {obj?.body?.map((item, itemIndex) =>
              item?.children?.map((value, valueIndex) => {
                const wordsArray = value?.text.split(" ");
                const truncatedText = wordsArray.slice(0, 15).join(" ");
                const isExpanded = expandedIndexes.includes(index);

                return (
                  <p
                    className="text-dark_black text-base font-medium"
                    key={`${itemIndex}-${valueIndex}`}
                  >
                    {isExpanded ? value?.text : truncatedText}
                  </p>
                );
              })
            )}
            <button
              className="text-sm md:text-[15px] text-dark_blue2 font-bold pt-2 3xl:pt-3"
              onClick={() => handleExpand(index)}
            >
              {expandedIndexes.includes(index)
                ? "Hide Details"
                : "View Details"}
            </button>
          </div>
        </article>
      </a>
    </>
  );
};

export default LatestNewsCard;
