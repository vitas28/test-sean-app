import React, { FC, memo } from "react";

const Header: FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <p className="text-center w-[730px] font-bold text-[56px] text-[#1B264F]">
        We make creative media that{" "}
        <p className="inline text-[#506BCA]">adds value</p>
      </p>
    </div>
  );
};

export default memo(Header);
