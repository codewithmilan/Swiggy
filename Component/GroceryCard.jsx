import {card} from "../utils/GroceryData"
import GroceryDataOfCart from "../Component/GroceryDataOfCart"

export default  function GroceryCard(){
    return (
        <div className="w-[80%] container mx-auto h-[670] mt-20">
            
            <h2 className="text-2xl font-bold ">{card?.title}</h2>
            <div className="grid grid-cols-4 gap-5  mt-5">
                {
                    card?.categories?.map((value)=>
                        <GroceryDataOfCart key={value?.link} value={value}></GroceryDataOfCart>
                    )
                }
            </div>

        </div>
    )
}