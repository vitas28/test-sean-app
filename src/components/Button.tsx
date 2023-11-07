import React, { FC, memo } from "react";

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-center items-center bg-[#1B2650] h-[60px] rounded-xl text-[#ffffff] text-[17px] font-bold uppercase">
      {title}
    </div>
  );
};

export default memo(Button);
