import React from 'react';
import '../index.css'; // Import CSS file for styling

const Navbar = () => {
  return (
    <div className=' aesthetix-text-2 text-black md:mx-3'>
      <div className='py-4 flex justify-center items-center h-[7vh]'>
        <div className='hidden md:flex font-semibold text-md'>
          <div>
            <button className='hover:text-black/75 px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>About us</button>
          </div>
          <div>
            <button className='hover:text-black/75 px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Discover</button>
          </div>
          <button className='hover:text-black/75 px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Support</button>
          <button className='hover:text-black/75 px-5 transition-all ease-in-out active:scale-95 hover-underline-animation'>Blog</button>
        </div>
        <div className='md:hidden'>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
