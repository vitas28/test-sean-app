import React, { FC, memo } from "react";
import { Card } from "../types";

const CardItem: FC<Card> = ({ images, title, lists, paragraphs }) => {
  return (
    <div className="rounded-md flex w-full bg-[#FFFFFF]">
      {images.length > 1 ? (
        <div className="w-[50%] h-full">
          {images.map((image) => (
            <img className="w-full h-[50%]" src={image} alt="image" />
          ))}
        </div>
      ) : (
        <img className="w-[50%] h-full" src={images[0]} alt="image" />
      )}
      <div className="px-8 py-10 flex justify-center w-[50%] h-full">
        <div className="flex flex-col items-center">
          <p className="text-[#353844] text-[24px] font-bold">{title}</p>
          {lists ? (
            <div className="mb-2">
              {lists.map((item) => (
                <li className="text-[#353844] text-[15px] font-bold marker:text-[#D2AD81]">
                  {item}
                </li>
              ))}
            </div>
          ) : null}
          {paragraphs.map((item) => (
            <p className="text-[#353844] text-[15px] font-semibold">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CardItem);
