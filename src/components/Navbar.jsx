import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Navbar = () => {
    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
        setCate(newList)
    }, [input])
    
    let items = useSelector(state => state.cart)
    console.log(items)

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <IoFastFood className='w-[30px] h-[30px] text-orange-500' />
            </div>
            <form className='w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-sm shadow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
                <IoSearch className='text-orange-500 w-[18px] h-[18px]' />
                <input type="text" placeholder='Search your dish...' className='bg-white w-full outline-none text-[14px] md:text-[18px]' onChange={(e) => setInput(e.target.value)} value={input} />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={()=>{
                setShowCart(true)
            }}>
                <span className='absolute top-0 right-2 text-orange-500 font-bold text-[18px]'>{items.length}</span>
                <RiShoppingBag4Fill className='w-[30px] h-[30px] text-orange-500' />
            </div>
        </div>
    )
}

export default Navbar
