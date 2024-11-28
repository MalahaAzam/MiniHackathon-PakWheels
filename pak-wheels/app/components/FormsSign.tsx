
import Link from "next/link"


export default function FormsSign(){
    return(
        <main>
        <div>
            <h1 className="text-3xl font-semibold text-center mt-5 uppercase ">Sign In</h1>
            <div>  
            <form className="flex gap-3 flex-col justify-centre items-center  border">
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Full Name"/>
               <input type="Email" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Email"/>
               <input type="Password" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Password"/>

             <button className="bg-blue-950 text-white p-2 px-4 rounded-lg">Sign In</button>
            </form>
        </div>
        </div>
 
        <div className="my-7">
            <h1 className="text-3xl font-semibold text-center mt-5 uppercase ">Sign up</h1>
            <div>  
            <form className="flex gap-3 flex-col justify-centre items-center  border">
               <input type="Name"  className=" p-1 rounded-xl w-2/6 border border-blue-500" placeholder="Full Name"/>
               <input type="Email" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Email"/>
               <input type="Password" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Password"/>
               <input type="Password" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Re-enter your Password"/>
               <input type="Date of Birth" className="p-1 rounded-xl w-2/6  border border-blue-500" placeholder="Enter your Date of Birth"/>

             <button className="bg-blue-950 text-white p-2 px-4 rounded-lg">Sign up</button>
            </form>
        </div>
        </div>
        
        </main>
    )
}