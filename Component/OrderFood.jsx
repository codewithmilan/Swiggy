

export default function GroceryDataOfCart({value}){

    return(

        <div  className="">
            
            <div className="h-15 flex justify-center items-center  w-auto border border-gray-300 rounded-lg cursor-pointer  ">
                <a className=" text-center font-bold text-gray-600  text-sm" href={value?.link} target="_blank">{value?.text} </a>
            </div>


        </div>
    )
}   