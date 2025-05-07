import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className=" py-14 bg-gradient-to-b from-black to-blue-950 text-center px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-white text-3xl sm:text-4xl">Find Used Cars in Pakistan</p>
        <p className="text-white text-base sm:text-lg mt-2">
          With thousands of cars, we have just the right one for you
        </p>

        {/* Search Form */}
        <form className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 pt-6 w-full max-w-screen-md mx-auto">
          <input
            type="text"
            className="p-2 w-full sm:w-60 border border-gray-200"
            placeholder="Car make or model"
          />
          <input
            type="text"
            className="p-2 w-full sm:w-60 border border-gray-200"
            placeholder="All cities"
          />
          <input
            type="number"
            className="p-2 w-full sm:w-60 border border-gray-200"
            placeholder="Price range"
          />
          <Link href="/Routes/UsedCars" passHref>
            <button type="button" className="bg-green-600 p-3 text-white rounded w-full sm:w-auto flex items-center gap-2">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5..." />
              </svg>
              Search
            </button>
          </Link>
        </form>

        <button className="border border-white py-1 px-5 text-white bg-transparent mt-6 rounded text-sm">
          Advanced Filter &gt;
        </button>
      </section>

      {/* Sell Your Car Section */}
      <section className="  mt-16 px-4 sm:px-8 md:px-16 lg:px-32">
        <p className="text-center font-semibold text-2xl font-sans">
          Sell Your Car on PakWheels and Get the Best Price
        </p>
        <div className="flex flex-col justify-center sm:flex-row mt-6 gap-6">
          {/* Post Your Ad */}
          <div className="flex-1 border-gray-200 px-5">
            <p className="text-blue-900 font-semibold">Post your Ad on PakWheels</p>
            <p className="flex items-start text-base mt-3 gap-2">
              <span className="text-green-600">✔</span> Post your Ad for Free in 3 Easy Steps
            </p>
            <p className="flex items-start text-base mt-1 gap-2">
              <span className="text-green-600">✔</span> Get Genuine offers from Verified Buyers
            </p>
            <p className="flex items-start text-base mt-1 gap-2">
              <span className="text-green-600">✔</span> Sell your car Fast at the Best Price
            </p>
            <Link href="/Routes2/Add">
              <button className="bg-red-700 text-white text-lg rounded-md px-4 py-2 mt-4">
                Post Your Ad
              </button>
            </Link>
          </div>

          {/* OR separator */}
          <div className="flex items-center justify-center text-gray-600 font-semibold mr-20">OR</div>

          {/* Sell It For Me */}
          <div className="flex-1 pb-10 border-gray-200 px-5">
            <p className="text-blue-900 font-semibold">Try PakWheels Sell It For Me</p>
            <p className="flex items-start text-base mt-3 gap-2">
              <span className="text-green-600">✔</span> Dedicated Sales Expert to Sell your Car
            </p>
            <p className="flex items-start text-base mt-1 gap-2">
              <span className="text-green-600">✔</span> We Bargain for you and share Best Offer
            </p>
            <p className="flex items-start text-base mt-1 gap-2">
              <span className="text-green-600">✔</span> We ensure Safe & Secure Transaction
            </p>
            <Link href="/Routes2/Add">
              <button className="bg-blue-900 text-white text-lg rounded-md px-4 py-2 mt-4">
                Register Your Car
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured New Cars */}
      <section className="py-16 bg-gray-200 px-4 sm:px-8 md:px-16 lg:px-32 overflow-x-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="font-semibold text-gray-700 text-2xl">Featured New Cars</h2>
          <Link className="text-blue-600 text-base" href="/Routes/NewCars">
            View All New Cars
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 pt-6">
          {["Popular", "Upcoming", "Newly Launched"].map((category) => (
            <p key={category} className="text-gray-700 font-medium text-lg">
              {category}
            </p>
          ))}
        </div>

        {/* Car Cards */}
        <div className="flex flex-wrap gap-4 pt-6">
          {[
            { name: "New Toyota Corolla", price: "PKR 59.7 - 75.5 lacs", link: "Corolla", img: "/Corolla.jpg" },
            { name: "New Suzuki Alto", price: "PKR 23.3 - 30.5 lacs", link: "Alto", img: "/alto.png" },
            { name: "New Honda City", price: "PKR 46.5 - 58.5 lacs", link: "City", img: "/citty.jpg" },
            { name: "New Honda Civic", price: "PKR 86.6 - 99.0 lacs", link: "Civic", img: "/civic.jpg" },
          ].map((car) => (
            <div key={car.name} className="w-full sm:w-60 bg-white p-4 flex flex-col">
              <Link href={`/Cardetails/${car.link}`}>
                <Image src={car.img} alt={car.name} width={300} height={200} />
              </Link>
              <p className="text-blue-950 font-semibold mt-2">
                <Link href={`/Cardetails/${car.link}`}>{car.name}</Link>
              </p>
              <p className="text-green-600">{car.price}</p>
              <p className="text-yellow-600">★★★☆☆</p>
              <p className="text-xs text-blue-900 underline mt-1">
                <Link href={`/Cardescription/${car.link.toLowerCase()}ds`}>
                  Vehicle Description
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
