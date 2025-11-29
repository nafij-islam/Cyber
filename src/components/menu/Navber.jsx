import React from 'react'
import logo from '../../assets/logo.png'
const Navber = () => {
  return (
     <section className='py-7 border-b-1 border-[#eb4112]'>
         <div className='max-w-[1320px] mx-auto'>
             <div className='flex items-center justify-between'>
              <div className=''>
                   <img src={logo} alt="" />
              </div>
              <div className=''>
                  <ul className='text-white flex gap-10'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog </li>
                    <li>Pages</li>
                    <li>Contact </li>
                  </ul>
              </div>
              <div className=''>
                   <button className='text-white rounded-[8px] flex ms-auto bg-linear-to-r from-[#F0B71F] to-[#E03609] py-[13px] px-[21px]'>Get started free</button>
              </div>

             </div>
         </div>
     </section>
  )
}

export default Navber