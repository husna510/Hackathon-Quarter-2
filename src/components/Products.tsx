import Image from "next/image";
import React from "react";
//Home Products
const Products = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full mt-[20px] h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8">
              <div className="w-[285px] h-[446px] bg-[#F4F5F7] mx-auto">
                <Image
                  src={"/assets/CafeChair.svg"}
                  alt="table-img"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                  Syltherine
                </h3>
                <p className="ml-6">Stylish cafe chair</p>
                <span className="text-[20px] font-semibold mr-6 ml-6">
                  Rp 2.500.000
                </span>
                <span className="text-[16px] line-through">Rp 3.500.000</span>
              </div>
              <div className="relative w-[285px] h-[446px] bg-[#F4F5F7] mx-auto">
                <Image
                  src="/assets/LeviosaChair.svg"
                  alt="chair-img"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                  Leviosa
                </h3>
                <p className="ml-6">Stylish cafe chair</p>
                <span className="text-[20px] font-semibold mr-6 ml-6">
                  Rp 2.500.000
                </span>
      
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-60 flex items-center justify-center flex-col">
                  <button className="text-[#B88E2F] text-[16px] font-semibold bg-[#FFFFFF] w-[202px] h-[48px]">
                    Add to cart
                  </button>
                  <div className="flex items-center justify-around gap-4 mt-6 text-[#FFFFFF]">
                    <Image
                      src={"/assets/Share.svg"}
                      alt="icon-1"
                      width={16}
                      height={16}
                    />
                    <span>Share</span>
                    <Image
                      src={"/assets/Compare.svg"}
                      alt="icon-2"
                      width={16}
                      height={16}
                    />
                    <span>Compare</span>
                    <Image
                      src={"/assets/Heart.svg"}
                      alt="icon-3"
                      width={16}
                      height={16}
                    />
                    <span>Like</span>
                  </div>
                </div>
              </div>
              <div className="w-[285px] h-[446px] bg-[#F4F5F7] mx-auto">
                <Image
                  src={"/assets/Sofa.svg"}
                  alt="sofa-img"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                  Lolito
                </h3>
                <p className="ml-6">Luxury big sofa</p>
                <span className="text-[20px] font-semibold mr-6 ml-6">
                  Rp 7.000.000
                </span>
                <span className="text-[16px] line-through">Rp 3.500.000</span>
              </div>
              <div className="w-[285px] h-[446px] bg-[#F4F5F7] mx-auto">
                <Image
                  src={"/assets/Couch.svg"}
                  alt="multi-sofa-img"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                  Respira
                </h3>
                <p className="ml-6">Outdoor bar table and stool</p>
                <span className="text-[20px] font-semibold mr-6 ml-6">
                  Rp 500.000
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto max-w-screen-xl mt-8">
              <div className="w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center">
                <Image
                  src={"/assets/NightLamp.svg"}
                  alt="Night lamp"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] mt-4">
                  Grifo
                </h3>
                <p className="text-center">Night lamp</p>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[20px] font-semibold">Rp 1.500.000</span>
                  <span className="text-[16px] line-through text-gray-500">
                    Rp 3.500.000
                  </span>
                </div>
              </div>
      
              <div className="relative w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center">
                <Image
                  src="/assets/Product6.svg"
                  alt="Muggo"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] mt-4">
                  Muggo
                </h3>
                <p className="text-center">Small mug</p>
                <span className="text-[20px] font-semibold">Rp 150.000</span>
              </div>
      
              <div className="w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center">
                <Image
                  src={"/assets/BedSet.svg"}
                  alt="Cute bed set"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] mt-4">
                Pingky
                </h3>
                <p className="text-center">Cute bed set</p>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[20px] font-semibold">Rp 7.000.000</span>
                  <span className="text-[16px] line-through text-gray-500">
                  Rp 7.000.000
                  </span>
                </div>
              </div>
      
              <div className="w-full h-[446px] bg-[#F4F5F7] mx-auto flex flex-col items-center">
                <Image
                  src={"/assets/Pot.svg"}
                  alt="multi-sofa-img"
                  width={285}
                  height={301}
                />
                <h3 className="text-[24px] font-semibold text-[#3A3A3A] mt-4">
                Potty
                </h3>
                <p className="text-center">Minimalist flower pot</p>
                <span className="text-[20px] font-semibold">Rp 500.000</span>
              </div>
            </div>
      </div>



    
  );
};

export default Products;
