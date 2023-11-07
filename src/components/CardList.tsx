import React, { FC, memo } from "react";
import CardItem from "./CardItem";
import { cards } from "../data";
import { Card } from "../types";

const CardList: FC = () => {
  return (
    <div className="w-[1200px] flex items-center flex-col m-auto">
      <div className="grid grid-cols-3 gap-[30px]">
        {cards.map((card: Card) => (
          <CardItem key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default memo(CardList);
