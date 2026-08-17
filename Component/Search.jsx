import { useState } from "react";
import { RestData } from "../utils/RestData";
import ItemsCard from "./ItemsCard";

export default function Search() {
  const [food, setFood] = useState("");

  const restData =RestData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredData = restData?.filter((item) => "title" in item?.card?.card);

  // All items combine
  const allItems = filteredData?.flatMap((value) => value?.card?.card?.itemCards || [],);

  // Search only when 2+ characters typed
  const searchedItems =food.length >= 2? allItems?.filter((items) => items?.card?.info?.name?.toLowerCase()?.includes(food.toLowerCase()),):[];

  return (
    <div className="w-[80%] container mx-auto mt-30">
      {/* SEARCH INPUT */}
      <div className="sticky top-0 bg-white py-4 z-10">
        <input
          className="h-12 w-full border border-gray-300 rounded-xl pl-4 text-lg outline-none focus:border-orange-500"
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Search for dishes"
        />
      </div>

      {/* SEARCH RESULT */}
      <div className="mt-8">
        {
        food.length < 2 ? (<h1 className="text-center text-xl text-gray-400 mt-20">Type at least 2 characters</h1>) : searchedItems?.length > 0 ? (
          searchedItems?.map((items, index) => (
            <ItemsCard key={items?.card?.info?.id + index}value={items?.card?.info}/> ))) :
            (<h1 className="text-center text-2xl text-gray-500 mt-20"> No Item Found</h1>)
        }
      </div>
    </div>
  );
}
