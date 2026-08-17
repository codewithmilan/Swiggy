export default function DineCart({value}){
    return (

        <div className="flex flex-nowrap flex flex-col border-solid bg-red-50 rounded-2xl "> 
            <div className="h-58 w-80 relative">
           <a href={value?.cta?.link}><img  className="h-48 w-80 object-cover rounded-tl-2xl rounded-tr-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.info?.mediaFiles?.[0]?.url} alt="xxxxx" /></a>
            <h2 className="pl-5 flex justify-between pr-5 text-xl font-bold text-red text-center">{value?.info?.name} <span>{value?.info?.rating?.value}</span></h2>
           
            </div>


            <div className="flex flex-col">
                <p className="pl-5 flex justify-between text-sm  pr-5">{value?.info?.cuisines?.[0]} . {value?.info?.cuisines?.[1]} <span>{value?.info?.costForTwo}</span></p>
                <p className="pl-5 flex justify-between text-sm pr-5">{value?.info?.locationInfo?.formattedAddress}  <span>{value?.info?.locationInfo?.distanceString}</span></p>
                <a href={value?.cta?.link} className="bg-[#1BA672] h-9 mx-4 text-sm text-center p-1.5 font-bold text-white rounded-lg"><button>{value?.info?.offerInfoV3?.vendorOffer?.title} {value?.info?.offerInfoV3?.vendorOffer?.subtitle} <span>{value?.info?.offerInfoV3?.vendorOffer?.subtext}</span></button></a>
                <a href={value?.cta?.link} className="bg-[#C8F9E5] h-9 mx-4 text-sm text-center my-3 p-1.5 font-bold text-[#4BBD93] rounded-lg"><button>{value?.info?.customerOffer?.info?.description}</button></a>
            </div>
        </div>
    )
}