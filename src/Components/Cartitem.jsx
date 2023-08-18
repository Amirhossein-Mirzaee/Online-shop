import React, { useContext,  } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../Context/CartContext';

const Cartitem = ({ item }) => {
  const { id, title, image, price,amount} = item;
  const {decrease,removeFromCart,increase} = useContext(CartContext)

  
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px] hover:-rotate-3 duration-200' src={image} alt='' />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <div className='flex items-center'>
              <Link
                to={`/product/${id}`}
                className='text-sm uppercase font-medium max-w-[240px] text-black no-underline hover:underline hover:text-blue-600'
              >
                {title}
              </Link>
              <div  onClick={()=>removeFromCart(id)}className='text-xl ml-[190px] right-0'>
                <IoMdClose className='text-gray-500 cursor-pointer hover:text-red-500 transition' />
              </div>
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='text-red-500 flex flex-1 max-w-[100px] bg-slate-600
            items-center h-full border font-medium'>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-[#2f4f4f] duration-150'>
              <IoMdRemove onClick={()=>decrease(id)} />
              </div>   
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-[#2f4f4f] duration-150'>
              <IoMdAdd onClick={()=>increase(id)}/>
              </div>   
            </div>
            <div className='flex-1 flex items-center justify-around font-light'>$ {price}</div>
            <div className='flex-1 flex justify-end items-center font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;