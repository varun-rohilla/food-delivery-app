import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { useState } from 'react'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { LuShoppingCart } from "react-icons/lu";
import { toast } from 'react-toastify'

const Home = () => {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)

  const filter = (category) => {
    if (category === "All") {
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }
  }

  let items = useSelector(state => state.cart)

  let subtotal = items.reduce((total, items) => total + (items.price * items.qty), 0)
  let deliveryFee = 20;
  let taxes = subtotal * 0.5 / 100
  let total = Math.floor(subtotal + deliveryFee + taxes)

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Navbar />
      {!input && <div className='flex flex-wrap justify-center items-center gap-5 w-[100%]'>
        {Categories.map((item) => {
          return <div key={item.id} className='w-[125px] h-[135px] bg-white flex flex-col gap-5 p-4 text-[15px] font-bold text-gray-800 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
            {item.icon}
            {item.name}
          </div>
        })}
      </div>}

      <div className='w-full flex flex-wrap gap-6 px-20 justify-center items-center pt-8'>
        {cate.length>0?cate.map((item) => (
          <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )):<div className='text-center text-2xl text-[#999] font-semibold pt-5 h-full w-full flex justify-center items-center'>No dishes found</div> }
      </div>

      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"} `}>
        <header className='w-[100%] flex justify-between items-center'>
          <span className='text-orange-500 text-[18px] font-semibold flex justify-center items-center gap-1'>Order Summary <LuShoppingCart className='text-[18px] font-bold'/></span>
          <RxCross2 className='w-[30px] h-[30px] text-orange-500 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowCart(!showCart)} />
        </header>
        {items.length > 0 ? <>
          <div className='w-full mt-9 flex flex-col gap-8'>
            {items.map((item) => (
              <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            ))}
          </div>
          <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-0.5 p-8'>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
              <span className='text-green-500 font-semibold text-lg'>Rs {subtotal}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
              <span className='text-green-500 font-semibold text-lg'>Rs {deliveryFee}/-</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
              <span className='text-green-500 font-semibold text-lg'>Rs {taxes}/-</span>
            </div>
          </div>
          <div className='w-full flex justify-between items-center p-8'>
            <span className='text-2xl text-gray-600 font-semibold'>Total</span>
            <span className='text-green-500 font-semibold text-2xl'>Rs {total}/-</span>
          </div>
          <button className='w-[80%] bg-green-500 p-2 rounded-md cursor-pointer font-semibold text-white text-[16px] hover:bg-green-600 transition-all' onClick={()=>{
            toast.success("Order Placed!")
          }}>Place Order</button>
        </>
          :
          <div className='text-center text-2xl text-[#999] font-semibold h-full w-full flex justify-center items-center'>
            Empty Cart
          </div>
        }

      </div>
    </div>
  )
}

export default Home
