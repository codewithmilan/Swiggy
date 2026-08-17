export default function Card({ value }) {
    let abc=value?.info?.cta?.link;
    console.log(abc)
    return (

        <div className="min-w-[150px] h-[240px] rounded-xl  bg-white  overflow-hidden">

            <a className="cursor-pointer " target="_blank" href={value?.cta?.link}><img
                className="w-full h-32 object-cover rounded-xl"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/" + value.info?.cloudinaryImageId}
                alt="restaurant"
            />
            </a>

            <div className="p-3 space-y-1">
                
                <h1 className="font-bold text-lg text-gray-800  truncate">
                    {value.info?.name}
                </h1>

                <p className="font-semibold text-sm text-gray-800">
                    ⭐ {value.info?.avgRating} <strong>•</strong>{" "}
                    <span>{value.info?.sla?.deliveryTime} mins</span>
                </p>

                <h1 className="text-sm text-gray-600 truncate font-bold">
                    {value.info?.cuisines?.join(", ")}
                </h1>

                <h1 className="text-sm text-gray-500 font-bold">
                    {value.info?.areaName}
                </h1>

            </div>

        </div>
    );
}