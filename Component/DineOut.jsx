import { restaurants } from "../utils/Dinedata"
import DineCart from "../Component/DineCart"
export default function DineOut(){
    return (
             <div className="mt-30 w-[80%] container mx-auto ">
                    <div>
                        <h1 className="font-bold text-2xl">Discover best restaurants on Dineout</h1>
                    </div>

                    <div className=" flex flex-nowrap overflow-x-auto scrollbar-hide mt-20 gap-10">

                    {

                        restaurants.map((value)=> <DineCart key={value.info.id} value={value}></DineCart>)
                    }
                    </div>

                    <img className="mt-15" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="dwonload" />
                </div>

            )
}