import {imageGridCards} from "../utils/InstaData"
import InstaCard from "../Component/InstaCard"
export default function InstaMart(){
    return(


        
            <div className="w-[80%] container mx-auto mt-20">
                <div className="h-6 mb-8 flex justify-between font-bold text-2xl">
                    <h1>Shop groceries on Instamart</h1>
                     <h1>-- --</h1>
                </div>
                 <div className="flex flex-nowrap h-70 overflow-x-auto gap-3  ">

                        {

                        imageGridCards.map((value)=><InstaCard key={value.id} value={value}></InstaCard>)
                    }
            </div>
             

            </div>
        
        
        
    )
}