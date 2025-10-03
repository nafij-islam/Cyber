import React from "react";
import animati1 from '../../assets/bannerabuloteimg1.png'
import miniimg from '../../assets/Image.png' 

const Banner = () => {
  return (
    <section className="pb-[60px]">
      <div className="max-w-[1320px] mx-auto relative group">
        <div>
          <h1 className="text-white text-[197px] font-bold text-center pt-[116px] font-orbi">
            Cyber Punk
          </h1>
        </div>

        <div className="pt-[157px] relative">
          <div className="flex justify-between">
            <div className="text-white">
              <h3 className="text-[24px] font-semibold">Stories & Lore</h3>
              <p className="tetx-[18px] font-semibold w-[250px] pt-[18px]">Dive into compelling narratives set in a dystopian future.</p>
            </div>
            <div className="text-white  uppercase">
              <h3 className="text-[36px] text-end">Events and</h3>
              <span className="flex text-[36px] justify-end font-semibold">Updates</span>
              <p className="pt-[44px] text-end  w-[320px] leading-8 pb-[58px]">Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
              <button className="flex ms-auto py-[12px] rounded-[7px] px-[23px] bg-linear-to-r from-[#F0B71F] to-[#E03609] text-[17px] font-semibold">Read More</button>
              
            </div>
          </div>
            <div className="absolute text-linear-to-r from-[#F0B71F] to-[#E03609] top-[175px] left-50">
               <img src={animati1} alt="" />
            </div>
        </div>


        <div className="flex">
          <div>
            <div className="flex p-[32px] ">
              <div>
                <img src={miniimg} alt="" />
              </div>
              <div className="pl-[44px]">
                <h3 className="text-[57px] text-transparent bg-clip-text bg-linear-to-r from-[#F0B71F] to-[#E03609] font-semibold  ">76,285K+</h3>
                <p className="text-[28px] font-medium text-white pt-[0px]">Experience the Future</p>
                <p className="text-[18px] font-medium text-white">Explore the high-tech, low-life world where the lines between</p>
              </div>  
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;
