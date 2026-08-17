import { useState } from "react"
import {data} from "../utils/OrderedData"
import OrderFood from "../Component/OrderFood"

export default  function FoodDelivaryCart(){

    const [showAll, setShowAll] = useState(false)

    return (
        <div className="w-[80%] container mx-auto  mt-20">
                    
                    <h2 className="text-2xl font-bold ">{data[0]?.title}</h2>
                    <div className="grid grid-cols-4 gap-5  mt-5">
                        {
                            (showAll ? data[0]?.categories : data[0]?.categories?.slice(0,15))?.map((value)=>
                                <OrderFood key={value?.link} value={value}></OrderFood>
                            )
                        }
                            <button  onClick={()=>setShowAll(!showAll)} className="px-4 py-2 border cursor-pointer text-orange-500 font-bold text-lg border-gray-300 rounded-lg ">
                             {showAll ? "Show Less" : "Show More"}
                            </button>
                    </div>
                 
        
                </div>
    )
}