import { useState } from "react";
import ItemsCard from "./ItemsCard";

export default function MenuCard({ menuItems, selected }) {
  const [isOpen, setIsopen] = useState(true);

  if (menuItems?.categories) {
    return (
      <div>
        <h1 className="font-bold text-xl text-gray-800 my-4">{menuItems.title}</h1>

        {menuItems.categories.map((items) => (<MenuCard key={items.title} menuItems={items} selected={selected} />))}
      </div>
    );
  }

  return (
    <div className="mb-4 border-b border-gray-200">

      <div className="p-3 w-full">

        <div className="flex justify-between items-center cursor-pointer bg-[#f2f2f3] hover:bg-[#e9e9eb] px-4 py-4 rounded-xl transition-all duration-300" onClick={() => setIsopen(!isOpen)}>

          <h1 className="font-bold text-lg text-[#3e4152]">{menuItems?.title}</h1>

          <span className="text-[#686b78] text-lg">{isOpen ? "▲" : "▼"}</span>

        </div>

        {
          isOpen &&
          menuItems?.itemCards?.filter((items) => {
            if (selected === "veg") return items?.card?.info?.isVeg === 1;
            if (selected === "nonveg") return !items?.card?.info?.isVeg;
            return true;
          })?.map((items) => (<ItemsCard key={items?.card?.info?.id} value={items?.card?.info} />))
        }

      </div>

    </div>
  );
}