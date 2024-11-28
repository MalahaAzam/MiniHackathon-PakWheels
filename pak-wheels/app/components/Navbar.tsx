import Link from "next/link";
import Image from "next/image";
import FormsSign from "@/app/components/FormsSign";





export default function Navbar(){
    return(
        <header>
                <nav className=" flex w-full h-10 bg-gray-950 text-white border-gray-800 text-base border  border- items-center">
                    <div className="space-x-4 justify-start pl-20 pr-96">
                    <p> 📱 Download App via SMS</p>
                    </div>
                    
                <div className="flex space-x-5 pl-96 ">
                    <p className="text-red-600">
                    اردو
                    </p>
                    <p>
                    <Link href="./Routes2/Sign">| Sign Up </Link>
                    </p>
                    
                    <p>
                    <Link href="./Routes2/Sign">| Sign In </Link>
                    </p>

                    
                </div>
                
            </nav>
            <nav className=' flex w-full h-20 text-xl bg-gray-950 text-white items-center px-8 '>
            <div className='flex space-x-7'>
                <div className="justify-items-start pl-8">
                <Link href="https://www.pakwheels.com/"> <Image src='/logo.png' alt="logo" width={175}  height={125}  /> </Link> 
               </div>
        <div className="flex space-x-8 items-center pl-14 text-sm">
        <div> <Link href="#">Home▼</Link></div>

                <div> <Link href="./Routes/UsedCars">Used Cars▼</Link></div>
                 <div><Link href="./Routes/NewCars">New Cars▼</Link></div>
                 <div><Link href="./Routes/Bikes">Bikes▼</Link></div>
                 <div><Link href="./Routes/AutoStore">Auto Store▼</Link></div>
                 <div><Link href="./Routes/Videos">Videos▼</Link></div>
                 <div><Link href="./Routes/Forum">Forum▼</Link></div>
                <div> <Link href="./Routes/Blogs">Blogs▼</Link></div>
                 <div><Link href="./Routes/More">More▼</Link></div>

                 
         </div> 
                 <div>
                    <button className="flex items-center bg-red-700 text-white rounded-md text-base px-3 py-1" > 
                        <Link href="./Routes2/Add">Post an Add</Link></button>
                 </div>
                
            </div>
                            
             </nav>
        </header>
    );
}