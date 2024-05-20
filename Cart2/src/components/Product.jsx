import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/CartSlices'
import toast from "react-hot-toast";

function Product({item}) {

    const dispatch=useDispatch();
    // const {cart}=useSelector((state)=>state)


    function removeToCart(){
        dispatch(remove(item.id));
        toast.error("Item remove from cart!!")


    }

    function addToCart(){
        dispatch(add(item))
        toast.success("Item added successfully to cart!")
    }


  return (
    <>

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img width="60px" className="rounded-t-lg" src={item.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.price}</h5>
        <div className=' flex flex-wrap flex-col '>
            <button onClick={addToCart}  className="inline-flex w-30 m-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
               Add to Cart
            </button>
            <button  onClick={removeToCart} className="inline-flex w-30  m-5 items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
               Remove from Cart
            </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product