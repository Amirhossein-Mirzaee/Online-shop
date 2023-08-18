import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';
import { SlidebarContext } from '../Context/SlidebarContext';

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const {addToCart} = useContext(CartContext)
  const {setIsOpen }= useContext(SlidebarContext)

  return (
    <div>
      <div className="border border-gray-300 h-80 w-full mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-48 mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
          <div>
            <button onClick={() => addToCart(product,id)} className="absolute top-0 -right-14 group-hover:right-5 p-2 w-12 flex flex-col items-center text-white gap-y-2 opacity-80 group-hover:opacity-100 transition-all duration-300">
              <div className="flex justify-center items-center text-white w-12 h-12 bg-[#2f4f4f]">
                <BsPlus className="text-3xl text-red-500" />
              </div>
              <Link
               onClick={()=>setIsOpen(true)}
                className="w-12 h-12 bg-[#2f4f4f] flex justify-center items-center text-primary shadow-xl"
              >
                <BsEyeFill className="text-red-500" />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="text-gray-700 text-sm capitalize mb-1">{category}</div>
        <Link to={`/product/${id}`} className="text-gray-900 mb-1 font-semibold no-underline
        hover:underline duration-3000">
          {title}
        </Link>
        <div className="text-gray-700 font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;