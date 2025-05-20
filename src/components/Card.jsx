import React from 'react'
import image1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({ name, image, price, id, type }) => {
    let dispatch = useDispatch()
    return (
        <div className='w-[270px] h-[350px] bg-white p-2.5 rounded-lg flex flex-col gap-1.5 shadow-xl hover:border-2 border-green-300'>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover' />
            </div>
            <div className='text-[22px] font-semibold'>
                {name}
            </div>

            <div className='w-full flex justify-between items-center'>
                <div className='text-[16px] font-bold text-green-600'>Rs {price}/-</div>
                <div className='flex justify-center items-center gap-1.5 text-green-600 font-bold pr-3.5 text-[16px]'>{type === "veg" ? <LuLeafyGreen /> : <GiChickenOven className='text-orange-500' />}{type == "veg" ? <span className='text-green-600'>{type}</span> : <span className='text-orange-600'>{type}</span>}</div>

            </div>

            <button className='w-full bg-green-500 p-2 rounded-md cursor-pointer font-semibold text-white text-[16px] hover:bg-green-600 transition-all' onClick={() => {
                dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 }));
                toast.success(`${name} added!`)
            }
            }>Add to Cart</button>
        </div>
    )
}

export default Card
