
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
    <div className=" w-screen flex items-center justify-items-center bg-gradient-to-b from-[#67938C] to-transparent">
    
      <div className="w-full overflow-hidden flex flex-col items-center mt-6 gap-4">
        <div className="overflow-x-hidden w-5/12 aspect-square relative ">
        <Image src={"/MainPageLogo.png"} alt="" fill className="object-contain"/>
        </div>
        <h5 className="font-[family-name:var(--font-cormorant)] font-semibold text-8xl text-[#F4852A]">Coming Soon</h5>
        <DynamicComponent/>
        <div className="w-full relative ">

    
          
         
          <div className="relative w-screen aspect-video ">
          <Image src={"/first-box-background.png"} alt="" fill className="object-cover w-full"/>
          </div>


          <div className="absolute bottom-0 w-full flex justify-center">
            
          <Image src={"/Place Your Image Here3 copy.png"} alt="" width={400} height={400} className="object-contain"/>
          
          </div>

          {/* <div className="absolute -bottom-4 w-full flex justify-center">
            <div className="relative w-full aspect-video z-10  ">
          <Image src={"/Layer 4 copy.png"} alt="" fill className="object-cover"/>
          </div>
          </div> */}


          <div className="absolute top-0 px-4 py-12 w-full flex items-start z-20">
            <div className="w-1/2 flex flex-col gap-8">
              <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-5xl">TECH</h4>
              <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-5xl">ACCESSORIES</h4>
              <button className="w-4/12 px-4 py-3 rounded-3xl font-[family-name:var(--font-inter)] font-semibold text-2xl text-white bg-[#357D76]">CONTACT NOW</button>
            </div>
            <div className="w-1/2 flex flex-col gap-4 items-end">
            <p className="w-5/12 text-end font-[family-name:var(--font-montserrat)] font-medium text-xl text-white">PORTABLECHARGERORPOWERBANK.
TOTHINKABOUT
USBDRIVE:FORSTORINGIMPORTANT
FILESORNOTES.</p>
             <div className="flex items-center gap-3 my-4">
              <span className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xl">+000 123 456 7890</span>
              <div className="p-2 bg-white rounded-full text-[#DB6618]"><Phone/></div>
             </div>

             <div className="flex items-center gap-3">
              <Link className="font-[family-name:var(--font-montserrat)] text-white font-medium text-xl" href={"/"}>www.studboxx.com</Link>
              <div className="p-2 bg-white rounded-full text-[#DB6618]"><Chain/></div>
             </div>

             <div className="flex items-center gap-3 mt-4">
              <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-5xl" href={"/"}>BIENTÔT...</h4>
              
             </div>
            </div>
          </div>

        </div>

        <div className="w-full relative mt-6">

    
          
         
          <div className="relative w-screen aspect-video ">
          <Image src={"/first-box-background.png"} alt="" fill className="object-cover w-full"/>
          </div>


          <div className="absolute bottom-0 w-full flex justify-center">
            
          <Image src={"/Place Your Image Here3 copy.png"} alt="" width={400} height={400} className="object-contain"/>
          
          </div>

          <div className="absolute -bottom-4 w-full flex justify-center">
            <div className="relative w-full aspect-video z-10  ">
          <Image src={"/Layer 4 copy.png"} alt="" fill className="object-cover"/>
          </div>
          </div>


          <div className="absolute top-0 px-4 py-12 w-full flex items-start z-20">
            <div className="w-1/2 flex flex-col gap-4">
              <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-5xl">TECH</h4>
              <h4 className="font-[family-name:var(--font-inter)] font-bold text-white text-5xl">ACCESSORIES</h4>
              <button className="w-4/12 px-4 py-3 rounded-3xl font-[family-name:var(--font-inter)] font-semibold text-2xl text-white bg-[#357D76]">CONTACT NOW</button>
            </div>
            <div className="w-1/2 flex flex-col gap-4 items-end">
            <p className="w-5/12 text-end font-[family-name:var(--font-montserrat)] font-light text-white">PORTABLECHARGERORPOWERBANK.
TOTHINKABOUT
USBDRIVE:FORSTORINGIMPORTANT
FILESORNOTES.</p>
             <div className="flex items-center gap-3">
              <span className="font-[family-name:var(--font-montserrat)] text-white">+000 123 456 7890</span>
              <div className="p-2 bg-white rounded-full text-[#DB6618]"><Phone/></div>
             </div>
             <div className="flex items-center gap-3">
              <Link className="font-[family-name:var(--font-montserrat)] text-white" href={"/"}>www.studboxx.com</Link>
              <div className="p-2 bg-white rounded-full text-[#DB6618]"><Chain/></div>
             </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
