import { useState,useParams } from "react";
import { RestData } from "../utils/RestData";
import MenuCard from "./MenuCard";
import { Link, useParams } from "react-router";
export default function RestaurantMenu() {
  const restData =RestData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredData = restData?.filter((item) => "title" in item?.card?.card);
  const [selected, setSelected] = useState(null);
  let {id}=useParams()
  return (
    <div className=" w-[80%] container mx-auto ">
      <Link to={`/city/delhi/${id}/search`}>
      <div className="w-full bg-gray-200 text-center py-2  mt-20 rounded-3xl">
        <button className=" text-xl text-gray-800 text-center rounded-2xl">Search For Desishes</button>
      </div>
      </Link>
      <div className="flex gap-3 mb-5 mt-10 mr-10">
        <button
          className={`text-lg border rounded-2xl px-4 py-2 transition-all duration-300 ${selected === "veg" ? "bg-green-600 text-white" : "bg-white text-gray-500"}`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}> Veg</button>
      
        <button
          className={`text-lg border rounded-2xl px-4 py-2 transition-all duration-300 ${selected === "nonveg" ? "bg-red-500 text-white" : "bg-white text-gray-500"}`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non Veg
        </button>
      </div>
      {
       filteredData?.map((value) => (<MenuCard key={value?.card?.card?.title}menuItems={value?.card?.card} selected={selected}>{" "}</MenuCard>))
      }
    </div>
  );
}

// const [restdata, setRestdata] = useState([]);

// useEffect(() => {
//   async function fetchdata() {
// const proxy = "https://thingproxy.freeboard.io/fetch/";
//     const swiggyAPI ="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.308768198844268&lng=76.6293491493165&restaurantId=394839&submitAction=ENTER";

//     const response = await fetch(proxy + swiggyAPI);
//     const data = await response.json();
//     console.log(data)
//     const temp=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
//     const filteredData=temp?.filter((item)=>"title" in item?.card?.card)
//     console.log(filteredData)
//     console.log(temp)
//     setRestdata(filteredData);
//   }

//   fetchdata();
// }, []);
