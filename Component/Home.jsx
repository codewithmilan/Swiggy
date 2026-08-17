import DineOut from "../Component/DineOut";
import Foodoption from "../Component/Foodoption";
import GroceryCard from "../Component/GroceryCard";
import Header from "../Component/Header";
import InstaMart from "../Component/InstaMart";
import FoodDelivaryCart from "../Component/FoodDelivaryCart";
import Footer from "../Component/Footer";

export default function Home(){
    return(
        <>
        <Header></Header>
        <Foodoption></Foodoption>
        <InstaMart></InstaMart>
        <DineOut></DineOut>
        <FoodDelivaryCart></FoodDelivaryCart>
        <GroceryCard></GroceryCard>
      
        <Footer></Footer>
        
        </>
    )
}