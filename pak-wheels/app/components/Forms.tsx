
import Link from "next/link"

export default function Forms(){
    return(
        <main>
            <div>
            <h1 className="text-3xl font-semibold text-center mt-5 uppercase ">Enter your Details</h1>
            <div>  
            <form className="flex gap-3 flex-col justify-centre items-center  border">
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Full Name"/>
               <input type="Email" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Email"/>
               <input type="Name" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Car's Make, Model and Variant"/>
               <input type="Number" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder=" Card Number"/>
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Address"/>

             <button className="bg-red-600 text-white p-2 px-4 rounded-lg">Post an Add</button>
            </form>
        </div>
        </div>

        <div>
            <h1 className="text-3xl font-semibold text-center mt-5 uppercase ">Enter your Details</h1>
            <div>  
            <form className="flex gap-3 flex-col justify-centre items-center  border">
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Full Name"/>
               <input type="Email" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Email"/>
               <input type="Name" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Car's Make, Model and Variant"/>
               <input type="Number" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder=" Card Number"/>
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Address"/>

             <button className="bg-blue-900 text-white p-2 px-4 rounded-lg">Register Your Car</button>
            </form>
        </div>
        </div>
        </main>
        
    )
}