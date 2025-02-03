import Link from "next/link";
import React from "react";

function FrontPage() {
  return (
    <div className="flex flex-col px-[100px] bg-[#F2F0F1] lg:flex-row justify-center items-start w-full lg:max-h-[663px] max-h-[550px]  sm:max-h-[853px] sm:min-w-[390px]  ">
      <div className="w-full lg:pt-[103px] sm:pt-[10px] pt-[70px]  ">
        <p
          className=" ABeeZee font-normal 
    lg:text-[64px] lg:w-[577px] lg:leading-[64px]  
    text-[54px] w-[507px] leading-[44px]  
    sm:text-[36px] sm:w-[315px] sm:leading-[34px]"
        >
          FIND CLOTHES THAT MATCH YOUR STYLE
        </p>

        <p
          className="ABeeZee py-[10px] 
    lg:text-[16px] sm:text-[14px] text-[15px] 
    lg:w-[545px] sm:w-[358px] w-[308px] 
    leading-[22px] sm:leading-[20px]"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button
          className="bg-black text-white ABeeZee 
    rounded-full flex justify-center items-center 
    w-[210px] sm:w-[368px] h-[52px] 
    mt-[24px] sm:mt-[10px]"
        >
          Shop Now
        </button>

        <div className="  items-start lg:w-[611px] sm:w-[519px] lg:h-[67px] my-[30px]">
          <div className="flex justify-between">
            <div className=" ABeeZee flex flex-col items-center w-[118px] h-[44px] sm:w-[157px] sm:h-[67px]">
              <p className="text-[24px] sm:text-[40px] leading-[28.37px] sm:leading-[47.28px] font-normal">
                200+
              </p>
              International Brands
            </div>
            <div className=" ABeeZee flex flex-col items-center w-[118px] h-[44px] sm:w-[170px] sm:h-[67px]">
              <p className="text-[24px] sm:text-[40px] leading-[28.37px] sm:leading-[47.28px] font-normal">
                2,000+
              </p>
              High-Quality Products
            </div>
            <div className=" ABeeZee flex flex-col items-center w-[118px] h-[44px] sm:w-[156px] sm:h-[67px]">
              <p className="text-[24px] sm:text-[40px] leading-[28.37px] sm:leading-[47.28px] font-normal">
                30,000+
              </p>
              Happy Customers
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center overflow-hidden">
        <div className="relative">
          <img
            src="/fasion.jpg"
            alt="Fashion"
            className="w-full lg:min-h-[662px] sm:w-[390px] h-[648px] sm:h-[490px] object-top"
          />

          <div className="absolute top-[10%] right-[0%] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[104px] lg:h-[104px]">
            <img src="svgs/homePic/star.svg" className="w-full h-full" />
          </div>
          <div className="absolute bottom-[60%] left-[2%] w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] lg:w-[56px] lg:h-[56px]">
            <img src="svgs/homePic/star.svg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
