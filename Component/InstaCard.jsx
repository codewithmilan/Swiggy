export default function InstaCard({value}) {
  return <>
        <div className=" mr-8">
        <a className="" href={value?.action?.link} ><img className="h-50 w-39 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.imageId} alt="Food Image" /></a>
        <div className="w-36 h-12 flex justify-center items-center">
            <div className="font-bold text-xl  text-center">{value?.action?.text}</div>
        </div>

        </div>
  </>
}
