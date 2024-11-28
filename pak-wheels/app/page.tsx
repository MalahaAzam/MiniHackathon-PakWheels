import Image from "next/image";
import Link from "next/link";
import Forms from "./components/Forms";
import FormsSign from "@/app/components/FormsSign";


export default function Home() {
  return (
   <main className="min-h-screen">
       <div className = "h-96  bg-fixed bg-gradient-to-b from-black to bg-blue-950 text-center content-center    border-y-transparent">
        <p className="text-white text-4xl">Find Used Cars in Pakistan</p>
        <p className="text-white text-lg" >With thousands of cars, we have just the right one for you</p>
        
        <div>
          <form className="flex items-center justify-around px-32">
           <div className="flex pt-5">
            <input type="text" className="p-1  w-2/6 border border-gray-200 " placeholder="Car make or model"/>
           <input type="text" className="p-1  w-2/6 border border-gray-200" placeholder="All cities"/>
           <input type="number" className="p-1  w-2/6 border border-gray-200" placeholder="Price range"/>
           <button className=" bg-green-600 p-4"> <Link href="./Routes/UsedCars">
           
<svg className="w-[15px] h-[15px] fill-[#FFFFFF]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
</svg> </Link>  </button>

           </div>
          </form>
          <button className="border border-white py-1 px-5 text-white bg-transparent mt-7 rounded text-sm">Advanced Filter &gt; </button>
        </div>
    </div>

    <div className=" h-80 mt-20 px-0 ">
   <p className="flex justify-center font-semibold text-2xl bg-gray-200 font-sans">Sell Your Car on PakWheels and Get the Best Price</p>
   <div className="flex justify-around text-2xl mt-3 border-gray-300">
   <div className=" border-l-2 border-gray-200 pl-5 border-r-2 pr-5">
  <p className="text-blue-900 font-semibold font-sans">Post your Ad on PakWheels</p>
  <p className="flex text-base mt-3 gap-3"> <span className="text-green-600">✔</span> Post your Ad for Free in 3 Easy Steps</p>
  <p className="flex text-base mt-1 gap-3"><span className="text-green-600">✔</span> Get Genuine offers from Verified Buyers</p>
  <p className="flex text-base mt-1 gap-3"><span className="text-green-600">✔</span> Sell your car Fast at the Best Price</p>
  <button className="bg-red-700 text-white text-lg rounded-md px-4 py-1 mt-4"><Link href="./Routes2/Add">Post Your Add</Link></button>
   </div>

   <p className="flex items-center justify-center px-0 text-gray-600 font-semibold">OR</p>

   <div className="border-r-2 border-gray-200 pr-5 border-l-2 pl-5">
  <p className="text-blue-900 font-semibold font-sans">Try PakWheels Sell It For Me</p>
  <p className=" flex text-base mt-3 gap-3"><span className="text-green-600">✔</span> Dedicated Sales Expert to Sell your Car</p>
  <p className=" flex text-base mt-1 gap-3"><span className="text-green-600">✔</span> We Bargain for you and share the Best Offer</p>
  <p className="flex text-base mt-1 gap-3"><span className="text-green-600">✔</span> We ensure Safe & Secure Transaction</p>
  <button className="bg-blue-900 text-white text-lg rounded-md px-4 py-1 mt-4"><Link href="./Routes2/Add">Register Your Car</Link></button>
   </div>
</div>
</div>

    <div className=" flex pt-8 justify-around bg-gray-200">
      <h2 className="font-semibold text-gray-700 font-sans pl-4 pr-52 text-2xl">Featured New Cars</h2>
      <Link className="items-end text-blue-600 text-base pr-28 pl-10" href="./Routes/NewCars">View All New Cars</Link>
      </div>
      <div className=" flex pt-8 justify-start pl-44 h-20 gap-14 bg-gray-200"> 
        <p className="text-gray-700 font-sans text-lg font-medium ">Popular</p>
        <p className="text-gray-700 font-sans text-lg font-medium ">Upcoming</p>
        <p className="text-gray-700 font-sans text-lg font-medium ">Newly Launched</p>
</div>


  <div className="flex justify-start space-x-4 pl-44 pt-3 bg-gray-200 h-96">

    <div className="h-72 w-60 bg-white justify-between">
      <Link href="./Cardetails/Corolla"> <Image src='/Corolla.jpg' alt="New Toyota Corolla" width={300}  height={280}  /> </Link> 
    <p className="text-blue-950 font-semibold pl-12"><Link href="./Cardetails/Corolla">New Toyota Corolla</Link></p>
      <p className="text-green-600 pl-11">PKR 59.7 - 75.5 lacs</p>
      <p className="text-yellow-600 pl-20">★★★☆☆</p>
      <p className="flex justify-center text-xs text-blue-900 underline"><Link href="./Cardescription/Corollads">Vehicle Description</Link></p>
      </div>


    <div className="h-72 w-60 bg-white">
      <Link href="./Cardetails/Alto"> <Image src='/alto.png' alt="New Suzuki Alto" width={250}  height={200}  /> </Link> 
    <p className="text-blue-950 font-semibold pl-16"><Link href="./Cardetails/Alto">New Suzuki Alto</Link></p>
      <p className="text-green-600 pl-11">PKR 23.3 - 30.5 lacs</p>
      <p className="text-yellow-600 pl-20">★★★☆☆</p>
      <p className="flex justify-center text-xs text-blue-900 underline"><Link href="./Cardescription/Altods">Vehicle Description</Link></p>
      </div>


    <div className="h-72 w-60 bg-white"><Link href="./Cardetails/City"> 
    <Image src='/citty.jpg' alt="New Honda City" width={280}  height={200}  /> </Link> 
    <p className="text-blue-950 font-semibold pl-16"><Link href="./Cardetails/City">New Honda City</Link></p>
      <p className="text-green-600 pl-10">PKR 46.5 - 58.5 lacs</p>
      <p className="text-yellow-600 pl-20">★★★☆☆</p>
      <p className="flex justify-center text-xs text-blue-900 underline"><Link href="./Cardescription/Cityds">Vehicle Description</Link></p></div>


    <div className="h-72 w-60 bg-white"><Link href="./Cardetails/Civic"> 
    <Image src='/civic.jpg' alt="New Honda Civic" width={280}  height={200}  /> </Link> 
    <p className="text-blue-950 font-semibold pl-14">
      <Link href="./Cardetails/Civic">New Honda Civic</Link></p>
      <p className="text-green-600 pl-11">PKR 86.6 - 99.0 lacs</p>
      <p className="text-yellow-600 pl-20">★★★☆☆</p><p className="flex justify-center text-xs text-blue-900 underline"><Link href="./Cardescription/Civicds">Vehicle Description</Link></p></div>


  </div>

</main>

  );
}
