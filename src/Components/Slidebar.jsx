import React, { useContext } from 'react'
import { SlidebarContext } from '../Context/SlidebarContext'
import { CartContext } from '../Context/CartContext'
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import Cartitem from './Cartitem'
import { Link } from 'react-router-dom'



const Slidebar = () => {
const {cart,clearCart,total} = useContext(CartContext)
 const {isOpen, handleClose, }= useContext(SlidebarContext)
 
  return (
    <div className= {`${
      isOpen ? "right-0" : "-right-full" }
      w-full bg-white   fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      
      <div className='flex items-center justify-between py-6
      border-b'>
        <div className='font-semibold'>shopping bag(0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>{cart.map(item => {
        return <Cartitem item={item} key={item.id}/> 
      })}
      </div>
      <div>
        <div className='bg-[#2f4f4f] flex w-full justify-between items-center'>
          <div className='uppercase font-semibold bg-red-500 w-13 h-12 rounded-r-md text-[#2f4f4f] justify-center items-center  px-1 py-2.5'>
            <span>total: $ {parseFloat(total).toFixed(2)}</span>
            </div>
          <div onClick={clearCart} className='cursor-pointer rounded-l-md py-4 bg-[#2f4f4f] text-red-500 w-11 h-10 flex  justify-center items-center text-xl hover:text-[#2f4f4f] hover:bg-red-500'>
            <FiTrash2 className='duration-200'/>
          </div>
          
        </div>
        <Link className='bg-gray-200 flex p-4 justify-center items-center '>
        View Cart
        </Link>
        <Link className=''>
        Checkout
        </Link>
      </div>
      </div>
  )
}

export default Slidebar