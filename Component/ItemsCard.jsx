import { useState } from "react"
import { addItems,DecrementItems ,IncrementItems } from "./stored/Slicer";
import { useDispatch, useSelector } from "react-redux";

export default function ItemsCard({ value }) {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.slice1.items);

  const element = items.find(item=>item.id===value.id);
  const count = element? element.quantity:0;

  function handleAdditems(){
    dispatch(addItems(value));
  }

  function handleIncrementItems(){
    dispatch(IncrementItems(value));
  }

  function handleDecrementItems(){
    dispatch(DecrementItems(value));
  }
  return (
    <div className="flex justify-between shadow my-6 p-4 rounded-xl bg-white">

      <div className="w-[60%]">
        <h1 className="font-bold text-lg text-gray-600">{value?.name}</h1>

        <h2 className="font-bold">₹{(value?.price || value?.defaultPrice || value?.finalPrice) / 100}</h2>

        <h3 className="font-bold text-green-700 my-4">
          {value?.ratings?.aggregatedRating?.rating} <span className="text-gray-600">{"(" + value?.ratings?.aggregatedRating?.ratingCountV2 + ")"} </span>
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-3"> {value?.description}</p>
      </div>

      <div className="w-[20%] relative">
        <img
          className="rounded-xl h-36 w-full object-cover z-0"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value?.imageId}
          alt="food"
        />
      {
        count==0? <button className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg px-8 py-2 text-lg font-bold text-green-600 cursor-pointer hover:bg-gray-100 transition-all duration-300" onClick={()=>handleAdditems()}>ADD</button>:
        
        <div className="absolute  bottom-[-10px] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 py-2 text-lg font-bold text-green-600 cursor-pointer hover:bg-gray-100 transition-all duration-300 flex gap-4">
          <button  className="text-2xl" onClick={()=>handleDecrementItems()}>-</button>
          <span className="text-xl" >{count}</span>
          <button  className="text-2xl" onClick={()=>handleIncrementItems()}>+</button>
        </div>

      }
      </div>

    </div>
  );
}