
import {Link} from "react-router"
export default function RestCard({ value }) {
    return (
        <Link to={"/city/delhi/"+value.info?.id}>
        <div className="min-w-[250px] h-[340px] rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition">

          
                <img
                    className="w-full h-[187px] object-cover rounded-xl"
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        value.info?.cloudinaryImageId
                    }
                    alt="restaurant"
                />
            

            <div className="p-3 space-y-1">
                
                <h1 className="font-bold text-lg text-gray-800 truncate">
                    {value.info?.name}
                </h1>

                <p className="font-semibold text-sm text-gray-800 flex items-center gap-1">
                    <span className="bg-green-500 text-white px-2 py-[2px] rounded text-xs">
                        ⭐
                    </span>
                    {value.info?.avgRating} <strong>•</strong>
                    <span>{value.info?.sla?.deliveryTime} mins</span>
                </p>

                <h1 className="text-sm text-gray-600 truncate font-medium">
                    {value.info?.cuisines?.join(", ")}
                </h1>

                <h1 className="text-sm text-gray-500">
                    {value.info?.areaName}
                </h1>

            </div>
        </div>
        </Link>
    );
}