import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const Card2 = ({name, id, price, image, qty}) => {
  let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px] p-2 shadow-xl flex justify-between'>
      <div className='w-[60%] h-full flex gap-5'>
        <div className='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover'/>
        </div>
        <div className='w-[40%] h-full flex flex-col gap-3'>
            <div className='text-lg text-gray-900 font-semibold'>{name}</div>
            <div className='w-[100px] h-[40px] bg-slate-400 flex rounded-xl overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl'>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{
                  qty>1?dispatch(DecrementQty(id)):1
                }}>-</button>
                <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400'>{qty}</span>
                <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{
                  dispatch(IncrementQty(id))
                }}>+</button>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-4'>
            <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
            <RiDeleteBin6Line className='text-2xl text-red-500 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2
