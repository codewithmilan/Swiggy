export default  function FoodCard({value}){
    return (


        <>
        <img  className="h-46 w-38" src={`https://media-assets.swiggy.com/swiggy/image/upload/`+ value?.imageId }alt="abc" />
        </>
    )
}