import { Link } from "react-router";
import { useSelector } from "react-redux";

export default function Mheader() {

  const count = useSelector((state) => state.slice1.count);

  return (

    <div className="w-full h-20 bg-white flex justify-between items-center px-16 sticky top-0 shadow-md z-50">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-10">

        <div className="flex items-center gap-4 cursor-pointer">

          <img
            className="h-14 w-14 rounded-2xl object-cover shadow-md bg-[#FF5200] p-1"
            src="data:image/png;base64,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"
            alt="swiggy-logo"
          />

          <div>
            <h1 className="font-bold text-2xl text-[#FF5200]">
              Swiggy
            </h1>

            <p className="text-sm text-gray-500">
              Order Food Online
            </p>
          </div>

        </div>

        <h1 className="font-bold text-lg text-gray-700 hover:text-[#FF5200] cursor-pointer transition-all duration-300">
          Others
        </h1>

      </div>

      {/* RIGHT SECTION */}
      <div>

        <ul className="flex items-center font-semibold gap-10 text-[17px] text-[#3d4152]">

          <li className="hover:text-[#FF5200] cursor-pointer transition-all duration-300">
            Swiggy Corporate
          </li>

          <li className="hover:text-[#FF5200] cursor-pointer transition-all duration-300">
            Search
          </li>

          <li className="hover:text-[#FF5200] cursor-pointer transition-all duration-300">
            Offers
          </li>

          <li className="hover:text-[#FF5200] cursor-pointer transition-all duration-300">
            Help
          </li>

          <li className="hover:text-[#FF5200] cursor-pointer transition-all duration-300">
            Sign In
          </li>

          <Link to={"/checkout"}>

            <li className="relative hover:text-[#FF5200] cursor-pointer transition-all duration-300">

              Cart

              <span className="absolute -top-3 -right-5 bg-[#FF5200] text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                {count}
              </span>

            </li>

          </Link>

        </ul>

      </div>

    </div>
  );
}