import Mheader  from "../Component/FoodDelivary/Mheader"
import { Outlet } from "react-router"
export default function RestHeader(){
    return(
        <>
        <Mheader></Mheader>
        <Outlet></Outlet>
        </>
    )
}