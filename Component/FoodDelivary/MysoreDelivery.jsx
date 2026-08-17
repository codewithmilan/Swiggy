import { Carddata } from "../../utils/MysoreData";
import MysoreDeliveryCart from "./MysoreDeliveryCart";

export default function MysoreDelivery() {
  const restaurants =
    Carddata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;

  return (
    <div className="w-[80%] container mx-auto mt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {Carddata?.data?.cards[1]?.card?.card?.title}
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 overflow-x-auto scrollbar-hide">
        {restaurants.map((value) => (
          <MysoreDeliveryCart key={value.info.id} value={value} />
        ))}
      </div>
    </div>
  );
}
