export default function Footer() {
  return (
    <div className="bg-gray-100 mt-20 pt-10 pb-10">

      {/* Top Section */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <h1 className="text-xl font-semibold">
          For better experience, download the Swiggy app now
        </h1>

        <div className="flex gap-4">
          <img
            className="h-12 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="playstore"
          />
          <img
            className="h-12 cursor-pointer"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="appstore"
          />
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-[80%] mx-auto grid grid-cols-5 gap-10">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-orange-500">Swiggy</h1>
          <p className="text-gray-500 mt-2">© 2026 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h1 className="font-bold mb-3">Company</h1>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Swiggy Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h1 className="font-bold mb-3">Contact us</h1>
          <ul className="space-y-2 text-gray-600">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h1 className="font-bold mb-3">Available in</h1>
          <ul className="space-y-2 text-gray-600">
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h1 className="font-bold mb-3">Legal</h1>
          <ul className="space-y-2 text-gray-600">
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

    </div>
  );
}