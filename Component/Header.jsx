
import { Link } from "react-router";
import InstaCard from "../Component/InstaCard";
export default function Header() {
  return (
    <div>
      <div className="bg-[#FF5200] header">
        <div className="flex justify-between items-center container mx-auto px-10 py-6 h-[128px] text-xl">
          <img
            className="h-12"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy Logo"
          />

          <div className="flex items-center gap-6 text-white font-semibold">
            <a href="https://www.swiggy.com/corporate/" target="_blank">
              Swiggy Corporate
            </a>

            <a href="https://www.swiggy.com/corporate/" target="_blank">
              Partner with us
            </a>

            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className=" w-[149px] px-4 py-3 border-1 text-center rounded-xl"
            >
              Get the app
            </a>

            <a
              href="https://www.swiggy.com/corporate/"
              target="_blank"
              className="bg-black px-9 py-3 rounded-xl"
            >
              Sign In
            </a>
          </div>
        </div>

        <div className="pt-16 pb-8 bg-[#FF5200] text-white relative">
          <img
            className="absolute top-0 left-0 h-[440px] w-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt=""
          />

          <img
            className="absolute top-0 right-0 h-[440px] w-[240px]"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt=""
          />

          <div className="max-w-[60%] mx-auto text-5xl font-bold text-center p-8 leading-tight">
            Order food & groceries. Discover best restaurants. Swiggy it!
          </div>

          <div className="max-w-[70%] mx-auto flex gap-10">
            <input
              type="search"
              placeholder="Delhi, India"
              className="flex-1 h-14 px-5 rounded-lg text-black bg-white outline-none"
            />

            <input
              type="search"
              placeholder="Search for restaurant, item or more"
              className="flex-1 h-14 px-5 rounded-lg text-black bg-white outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center items-center relative pl-[130px]  pr-[100px] ">
          <Link to={"/restaurants"}>
            {" "}
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
              alt=""
            />
          </Link>
          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            {" "}
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt=""
            />
          </a>
          <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
            {" "}
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
