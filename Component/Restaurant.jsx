import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestCard from "./RestCard";
import { Carddata } from "../utils/MysoreData";
import MysoreDeliveryCart from "./FoodDelivary/MysoreDeliveryCart";
import Foodoption from "../Component/Foodoption";
import HorizentalLine from "../Component/FoodDelivary/HorizentalLine";

export default function Restaurent() {


  const data = Carddata?.data?.cards?.find((item) => item?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  if (!data) return <Shimmer />;
  return (
    <div className="w-[80%] container mx-auto ">
      <Foodoption></Foodoption>
       <HorizentalLine></HorizentalLine>
      {/* <MysoreDeliveryCart></MysoreDeliveryCart> */}
      <h1 className="font-bold text-2xl mt-5"> {Carddata?.data?.cards[1]?.card?.card?.header?.title}</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          data?.map((value)=><RestCard key={value?.info?.id} value={value}/>)
        }
      </div>

    </div>
  );
}


