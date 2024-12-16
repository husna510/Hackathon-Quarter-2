import Image from "next/image";
import React from "react";

const Range = () => {
  return (
    <div className="flex flex-col gap-12 justify-between items-center w-full h-auto">
      <div className="flex flex-col justify-center items-center w-auto h-[76.71px]">
        <div className="w-auto h-[48px]">
          <p className="font-bold text-[32px] leading-[48px] text-[#333333] text-center">
            Browse The Range
          </p>
        </div>
        <div className="flex justify-center items-center w-auto h-[28.71px]">
          <p className="font-normal text-[20px] leading-[30px] text-center text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

     
      <div className="flex justify-center gap-8">
      
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/dining.svg"
            alt="Dining"
            width={381}
            height={480}
          />
          <p className="font-semibold text-[24px] leading-9 text-center text-[#333333] mt-4">
            Dining
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/living.svg"
            alt="Living"
            width={381}
            height={480}
          />
          <p className="font-semibold text-[24px] leading-9 text-center text-[#333333] mt-4">
            Living
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/assets/bedroom.svg"
            alt="Bedroom"
            width={381}
            height={480}
          />
          <p className="font-semibold text-[24px] leading-9 text-center text-[#333333] mt-4">
            Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Range;
