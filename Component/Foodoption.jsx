import { imageGridCards } from "../utils/FoodData";
import FoodCard from "../Component/FoodCart";
export default function Foodoption() {
  return (
    <div>
      <div className="w-[100%] container mx-auto my-20">
        <div className="h-6 mb-8 flex justify-between font-bold text-2xl">
          <h1>Order our best food options</h1>
          <h1>-- --</h1>
        </div>

        <div className="flex flex-nowrap  h-xl overflow-x-auto gap-10 scrollbar-hide">
          {
          
          
          imageGridCards.map((value) => <FoodCard  key={value.id} value={value}></FoodCard>)
          
          
          }
          
          
          </div>
      </div>
    </div>
  );
}
