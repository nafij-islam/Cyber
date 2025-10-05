import React from "react";
import neonimg from "../../assets/neonimg.png";
import univalimg from '../../assets/unvilimg.png'


const Neon = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between">
          <div className="w-[46%]">
             <div>
                <h2 className="text-white pb-[68px] text-[56px] font-bold">Where <span className="text-[#E03609]">Neon Dreams & Digital </span>Nightmares Converge.</h2>
                <p className="text-[18px] font-medium text-white">A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. Explore the high-tech, low-life world where the lines between humanity and machinery blur.</p>
             </div>
             <div className="flex justify-between pt-[69px]">
                <div>
                    <h4 className="text-[47px] font-semibold text-[#E03609]">89,2K+</h4>
                    <p className="text-white text-[17px] font-medium pt-[8px]">Discover the Future</p>
                </div>
                <div> 
                    <h4 className="text-[47px] font-semibold text-[#E03609]">7001+</h4>
                    <p className="text-white text-[17px] font-medium pt-[8px]">Stories and Lore</p>
                </div>
                <div>
                    <h4 className="text-[47px] font-semibold text-[#E03609]">3,124+</h4>
                    <p className="text-white text-[17px] font-medium pt-[8px]">Art and Design</p>
                </div>
             </div>
          </div>
          <div className="w-[50%]">
            <img src={neonimg} alt="" />
          </div>
        </div>
        <div className="flex justify-between pt-20">
            <div className="w-[50%]">
               <img src={neonimg} alt="" />
            </div>
            <div className="w-[50%]">
                 <div className="pl-18">
                    <h2 className="text-[55px] font-bold text-white w-[500px] leading-[130%]">Unveil <span className="text-[#E03609]">the Secrets of the</span> Cybernetic Underworld</h2>
                    <p className="text-[18px] pb-[60px] text-white pt-[63px] w-[540px] leading-[160%] font-medium">A realm where advanced technology meets dystopian reality. Our website is your gateway to a universe of neon lights, gritty streets, and cybernetic enhancements. </p>
                    <div className="py-[33px] pl-[40px] border border-[#E03609] rounded-2xl">
                      <img src={univalimg} alt="" />
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Neon;
