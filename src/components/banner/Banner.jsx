import React from "react";
import animati1 from "../../assets/bannerabuloteimg1.png";
import miniimg from "../../assets/Image.png";
import union from "../../assets/Union.png";
import union2 from "../../assets/Union (1).png";
import tasnim from '../../assets/bannerpicture.png'

const Banner = () => {
  return (
    <section className="pb-[60px] border-b-1 border-[#E03609]">
      <div className="max-w-[1320px] mx-auto relative group">
        <div className="absolute left-[50%]  -translate-x-[50%] w-[690px] top-[300px]">
          <img src={tasnim} alt="" />
        </div>
        <img className="absolute -left-30 -top-8" src={union} alt="" />
        <img className="absolute -right-30 -top-8" src={union2} alt="" />
        <div>
          <h1 className="text-white text-[197px] font-bold text-center pt-[116px] font-orbi">
            Cyber Punk
          </h1>
        </div>

        <div className="pt-[157px] relative">
          <div className="flex justify-between">
            <div className="text-white">
              <h3 className="text-[24px] font-semibold">Stories & Lore</h3>
              <p className="tetx-[18px] font-semibold w-[250px] pt-[18px]">
                Dive into compelling narratives set in a dystopian future.
              </p>
            </div>
            <div className="text-white  uppercase">
              <h3 className="text-[36px] text-end">Events and</h3>
              <span className="flex text-[36px] justify-end font-semibold">
                Updates
              </span>
              <p className="pt-[44px] text-end  w-[320px] leading-8 pb-[58px]">
                Explore the high-tech, low-life world where the lines between
                humanity and machinery blur.
              </p>
              <button className="flex ms-auto py-[12px] rounded-[7px] px-[23px] bg-linear-to-r from-[#F0B71F] to-[#E03609] text-[17px] font-semibold">
                Read More
              </button>
            </div>
          </div>
          <div className="absolute text-linear-to-r from-[#F0B71F] to-[#E03609] top-[175px] left-50">
            <img src={animati1} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-black text-white">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center bg-black border border-gradient-to-r from-[#E03609] to-[#F0B71F] p-4 rounded-lg">
            <img
              src={miniimg}
              alt="Scenery"
              className="rounded-lg object-cover"
            />
            <div className="md:pl-6 mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-[57px] pb-[22px] font-bold text-[#FF6F3C]">76,285K+</h2>
              <p className="text-[28px] font-semibold ">
                Experience the Future
              </p>
              <p className="text-sm mt-1 text-gray-300">
                Explore the high-tech, low-life world where the lines between
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col  text-center md:text-left">
            <h2 className="text-[36px] leading-[120%] font-bold">
              ART AND <span className="text-[#FF6F3C] block">DESIGN</span>
            </h2>
            <p className="text-gray-300 w-[200px] mt-2">
              Feast your eyes on stunning visuals and concept art that bring the
              cyberpunk
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col pb-3 px-8 pt-2   mt-auto bg-black border border-gradient-to-r from-[#E03609] to-[#F0B71F] rounded-lg">
            <h2 className="text-[83px] font-bold text-[#FF6F3C]">17+</h2>
            <p className="text-[27px] w-30 pl-3  font-semibold">Years of Experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
