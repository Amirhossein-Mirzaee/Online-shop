import React, { useContext, useEffect, useState } from 'react';
import { SlidebarContext } from '../Context/SlidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';
import  LOGO from '../Assets/pngwing.com (1).png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isActive, setIsActive] = useState(true)
  const { setIsOpen, isOpen } = useContext(SlidebarContext);
  const {itemamount} = useContext(CartContext)
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(()=>{
    window.addEventListener('scroll' ,()=>{
      window.scrollY > 60 ? setIsActive (true) : setIsActive(false)
    })
  })

  return (

    <header className={`${isActive ? "bg-white opacity-25 py-4 shadow-md" : "bg-none py-2"} fixed w-full z-10 transition-all` }>
      <div className=' container flex mx-auto items-center justify-between h-full '>
      <Link to={'/'}>
      <div>
        <img className='w-[40px]  ' src={LOGO} alt="" />
      </div>
      </Link>
      <div onClick={handleToggle} className='cursor-pointer flex relative max-w-[50px]'>
        <BsBag className='text-2xl '/>
        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white flex justify-center items-center rounded-full'>{itemamount}</div>
      </div>
      </div>
    </header>
  );
};

export default Header;