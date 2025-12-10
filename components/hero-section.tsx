export  function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-300 to-yellow-500 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Manage Your <span className="text-red-600">E-Commerce Store</span>  
            <br /> Easily & Efficiently
          </h1>

          <p className="mt-4 text-lg text-gray-800">
            A complete seller-side portal to handle inventory, track orders, 
            manage products, and grow your online business with smart tools.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* RIGHT IMAGE GRID: 2x2 square with equal spacing */}
        <div className="relative w-full max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-full w-full">

            {/* IMAGE 1 */}
            <div className="overflow-hidden rounded-xl shadow-lg h-full">
              <img
                src="/img1.jpg"
                alt="img1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="overflow-hidden rounded-xl shadow-lg h-full">
              <img
                src="/img2.jpg"
                alt="img2"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="overflow-hidden rounded-xl shadow-lg h-full">
              <img
                src="/img3.jpg"
                alt="img3"
                className="w-full h-full object-cover"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="overflow-hidden rounded-xl shadow-lg h-full">
              <img
                src="/img4.jpg"
                alt="img4"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
