
import Navbar from "@/components/navbar/Navbar";
import { Link as Chain, Phone } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from 'next/link'

const DynamicComponent = dynamic(() => import ('@/components/TimeCounter'), {
  ssr: false, 
});

export default function Home() {
  return (
    <div className=" w-full flex items-center justify-items-center ">
      <div className="w-full  flex flex-col items-center mt-6 ">
        <div className=" w-8/12 flex items-center justify-center  relative ">
          <Image src={"/MainPageLogo.png"} alt="" width={400} height={400} className="object-contain"/>
        </div>
    
  
      <h5 className="my-5 font-[family-name:var(--font-cormorant)] font-semibold text-5xl lg:text-8xl text-[#F4852A]">Coming Soon</h5>
      <DynamicComponent/>


      <div className="w-full aspect-square relative flex flex-col items-center mt-5">

        <div className="relative w-11/12 aspect-square">
        <Image src={"/first-box-background.png"} alt="" fill className="object-cover w-full"/>
        </div>


        <div className="absolute bottom-16 md:bottom-1/4 w-11/12 flex justify-center">
          <div className="relative w-5/12 lg:w-6/12 flex justify-center">
          <Image src={"/Place Your Image Here3 copy.png"} alt="" width={400} height={400} className="object-contain"/>
          </div>
        
        
        </div>



        <div className="absolute top-0 px-4 py-12 w-11/12 flex items-start z-20">
          <div className="w-1/2 flex flex-col gap-8">
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-2xl lg:text-5xl">TECH</h4>
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-2xl lg:text-5xl">ACCESSORIES</h4>
            <button className="w-7/12 lg:w-5/12 px-4 py-3 rounded-3xl font-[family-name:var(--font-inter)] font-medium lg:font-semibold text-xs lg:text-2xl text-center text-white text-nowrap bg-[#357D76]">CONTACT NOW</button>
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-end">
          <p className=" text-end font-[family-name:var(--font-montserrat)] font-medium text-xs lg:text-xl text-white">PORTABLECHARGERORPOWERBANK.
TOTHINKABOUT
USBDRIVE:FORSTORINGIMPORTANT
FILESORNOTES.</p>
           <div className="flex items-center gap-2 lg:gap-3 my-2 lg:my-4">
            <span className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xs lg:text-xl">+000 123 456 7890</span>
            <div className="p-0.5 lg:p-3 bg-white rounded-full text-sm text-[#DB6618]"><Phone size={20}/></div>
           </div>

           <div className="flex items-center gap-2 lg:gap-3">
            <Link className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xs lg:text-xl" href={"/"}>www.studboxx.com</Link>
            <div className="p-0.5 lg:p-3 bg-white rounded-full text-[#DB6618]"><Chain size={20}/></div>
           </div>

           <div className="flex items-center gap-3 mt-4">
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-lg lg:text-5xl" href={"/"}>BIENTÔT...</h4>
            
           </div>
          </div>
        </div>
        </div>

        <div className="w-full aspect-square relative flex flex-col items-center mt-5">

  
        
       
        <div className="relative w-11/12 aspect-square">
        <Image src={"/first-box-background.png"} alt="" fill className="object-cover w-full"/>
        </div>


        <div className="absolute bottom-16 md:bottom-1/4 w-11/12 flex justify-center">
          <div className="relative w-5/12 lg:w-6/12 flex justify-center">
          <Image src={"/Place Your Image Here3 copy.png"} alt="" width={400} height={400} className="object-contain"/>
          </div>
        
        
        </div>



        <div className="absolute top-0 px-4 py-12 w-11/12 flex items-start z-20">
          <div className="w-1/2 flex flex-col gap-8">
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-2xl lg:text-5xl">STUDY</h4>
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-2xl lg:text-5xl">ESSENTIALS</h4>
            <button className="w-7/12 lg:w-5/12  px-4 py-3 rounded-3xl font-[family-name:var(--font-inter)] text-nowrap font-medium lg:font-semibold text-xs lg:text-2xl text-white bg-[#357D76]">CONTACT NOW</button>
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-end">
          <p className=" text-end font-[family-name:var(--font-montserrat)] font-medium text-xs lg:text-xl text-white">PRECISE SELECTION OF ESSENTIAL
PRODUCTS.YOU WILL FIND EVERYTHING
YOU NEED ON A DAILY BASIS,NO
MORE,NO LESS.SIMPLE,EFFECTIVE.</p>
           <div className="flex items-center gap-3 my-4">
            <span className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xs lg:text-xl">+000 123 456 7890</span>
            <div className="p-2 bg-white rounded-full text-[#DB6618]"><Phone/></div>
           </div>

           <div className="flex items-center gap-2 lg:gap-3">
            <Link className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xs lg:text-xl" href={"/"}>www.studboxx.com</Link>
            <div className="p-0.5 lg:p-3 bg-white rounded-full text-[#DB6618]"><Chain size={20}/></div>
           </div>

           <div className="flex items-center gap-3 mt-4">
            <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-lg lg:text-5xl" href={"/"}>BIENTÔT...</h4>
            
           </div>
          </div>
        </div>
        </div>
     
      

      </div>
    </div>
  );
}
