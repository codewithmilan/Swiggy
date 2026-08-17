import reactDOM from "react-dom/client";
import {BrowserRouter  ,Routes, Route,Link} from "react-router"
import Home from "../Component/Home";
import DineCart from "../Component/DineCart";
import Restaurent from "../Component/Restaurant";
// import MysoreePage from "../Component/FoodDelivary/MysoreePage";
import RestaurantMenu from "../Component/RestaurantMenu";
import Search from "../Component/Search";
import RestHeader from "../Component/RestHeader";
import { Provider } from "react-redux";
import { store } from "../Component/stored/Store";
import Checkout from "../Component/Checkout";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route element={<RestHeader/>}>
       <Route path="/restaurants" element={<Restaurent></Restaurent> } />
       <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu> } />
       <Route path="/city/delhi/:id/search" element={<Search/>}></Route>
       </Route>
           <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      
      </BrowserRouter>
      </Provider>
    </>
  );
}

reactDOM.createRoot(document.getElementById("root")).render(<App />);
