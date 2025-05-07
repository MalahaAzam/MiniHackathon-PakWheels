import Image from "next/image";

export default function Corollads() {
  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32">
      <p className="flex justify-center font-bold text-xl underline my-10 text-center">
        Toyota Corolla 2024 Price in Pakistan, Images, Reviews and Specs
      </p>
      <div className="flex justify-center">
        <Image src="/Corolla.jpg" alt="New Toyota Corolla" width={500} height={300} />
      </div>

      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-4 my-10 gap-4">
        <button className="p-2 bg-blue-700 text-white rounded-sm">Book a Test Drive</button>

        <button className="p-2 text-blue-900 border border-blue-900 rounded-sm">
          Request Bank Finance
        </button>

        <button className="p-2 text-blue-900 border border-blue-900 rounded-sm">
          Visit Place
        </button>

        <button className="p-2 text-blue-900 border border-blue-900 rounded-sm">
          Car Inspection
        </button>
      </div>

      <p className="flex justify-center text-xl mb-6">Vehicle Description</p>

      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-3 gap-3">
        <p className="font-bold">Number of Doors</p>
        <p>4</p>
        <p className="font-bold">Engine</p>
        <p>1800 CC</p>
        <p className="font-bold">Condition</p>
        <p>8.5/10</p>
        <p className="font-bold">Driven</p>
        <p>9500 KM</p>
        <p className="font-bold">Suspension Type</p>
        <p>Soft Suspension</p>
      </div>
      <div className="flex flex-wrap justify-center space-x-0 sm:space-x-3 gap-3 mt-4">
        <p className="font-bold">Avg</p>
        <p>13 KM per ltr</p>
        <p className="font-bold">Transmission</p>
        <p>Automatic</p>
        <p className="font-bold">Fuel Type</p>
        <p>High Octane</p>
      </div>
      <div>
        <p className="flex justify-center text-lg text-green-700 mt-10 font-semibold">
          PKR 50 00 000
        </p>
        <p className="flex justify-center my-5">
          <button className="bg-blue-700 text-white p-2 rounded-sm">Make Payment</button>
        </p>
      </div>
    </main>
  );
}
