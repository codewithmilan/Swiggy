

import { useSelector } from "react-redux";

export default function Checkout() {

  const items = useSelector((state) => state.slice1.items);

  const totalPrice = items.reduce((acc, item) =>acc +((item?.price || item?.defaultPrice || item?.finalPrice || 0) / 100)* item.quantity,0 );

  return (
    <div className="bg-[#e9ecee] min-h-screen ">
      <div className="w-full sticky top-0 z-50 h-16 bg-white shadow-md flex justify-between items-center px-16">

  {/* LEFT */}
  <div className="flex items-center gap-4 ">

    <div className="bg-[#fc8019] text-white h-12 w-12 rounded-xl flex items-center justify-center text-2xl font-bold shadow">
      S
    </div>

    <div className="">
      <h1 className="text-2xl font-bold text-[#fc8019] tracking-wide">
        Swiggy
      </h1>

      <p className="text-lg text-gray-500 font-medium ">
        Secure Checkout
      </p>
    </div>

  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-10 text-[#3d4152] font-semibold text-lg">

    <p className="cursor-pointer hover:text-[#fc8019] transition-all duration-300">
      Help
    </p>

 <p className="relative hover:text-[#FF5200] cursor-pointer transition-all duration-300 font-semibold">


  {/* <span className="absolute -top-2 -right-5 bg-[#FF5200] text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
   
  </span> */}

</p>
    <button className="border border-[#fc8019] text-[#fc8019] px-5 py-2 rounded-lg hover:bg-[#fc8019] hover:text-white transition-all duration-300">
      Sign In
    </button>

  </div>

</div>

      <div className="w-[85%] mx-auto flex gap-8 mt-10">

        {/* LEFT SECTION */}
        <div className="w-[65%] space-y-6">

          {/* ADDRESS */}
          <div className="bg-white p-6 shadow-sm rounded-md">
            <h1 className="text-2xl font-bold text-[#282c3f]">
              Delivery Address
            </h1>

            <div className="border mt-5 p-5 rounded-md">
              <h2 className="font-bold text-lg text-[#282c3f]">
                Home
              </h2>

              <p className="text-gray-500 mt-2">
                Delhi, India
              </p>

              <button className="mt-4 border border-[#fc8019] text-[#fc8019] px-6 py-2 font-bold hover:bg-[#fff7f0] transition-all duration-300">
                DELIVER HERE
              </button>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white p-6 shadow-sm rounded-md">
            <h1 className="text-2xl font-bold text-[#282c3f] mb-5">
              Choose Payment Method
            </h1>

            <div className="space-y-4">

              <div className="border p-4 rounded-md cursor-pointer hover:border-[#fc8019]">
                <h2 className="font-semibold">UPI</h2>
              </div>

              <div className="border p-4 rounded-md cursor-pointer hover:border-[#fc8019]">
                <h2 className="font-semibold">Credit / Debit Card</h2>
              </div>

              <div className="border p-4 rounded-md cursor-pointer hover:border-[#fc8019]">
                <h2 className="font-semibold">Cash on Delivery</h2>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="w-[35%]">

          <div className="bg-white p-6 shadow-sm rounded-md sticky top-5">

            <h1 className="text-2xl font-bold text-[#282c3f] border-b pb-4">
              Order Summary
            </h1>

            {/* ITEMS */}
            <div className="mt-5 space-y-5 max-h-[400px] overflow-y-auto">

              {
                items.map((value, index) => (

                  <div
                    key={value?.id + index}
                    className="flex justify-between items-start border-b pb-4"
                  >

                    <div className="w-[70%]">

                      <h2 className="font-semibold text-[#3d4152]">
                        {value?.name}
                      </h2>
                      <h2 className="font-semibold text-[#3d4152]"> No. of quantity    
                        { " " +value?.quantity}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                        {value?.description}
                      </p>


                    </div>

                    <h2 className="font-bold text-[#282c3f]">
                      ₹{((value?.price || value?.defaultPrice || value?.finalPrice) / 100)*value.quantity}
                    </h2>

                  </div>
                ))
              }

            </div>

            {/* BILL DETAILS */}
            <div className="mt-6 border-t pt-5 space-y-3 text-[#3d4152]">

              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹40</span>
              </div>

              <div className="flex justify-between">
                <span>GST & Charges</span>
                <span>₹25</span>
              </div>

              <div className="flex justify-between text-xl font-bold border-t pt-4 mt-4">
                <span>TO PAY</span>
           <span>{items.length === 0 ? 0 : `₹${totalPrice + 65}`}</span>
              </div>

            </div>

            {/* PLACE ORDER */}
            <button className="w-full mt-6 bg-[#60b246] hover:bg-[#4d9737] text-white py-4 text-lg font-bold transition-all duration-300 rounded-md">
              PLACE ORDER
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}



