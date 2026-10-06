import Image from "next/image";
import cow from '@/assets/cow-pic.jpg'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

import QurbaniTips from "@/components/home/QurbaniTips";
import BestBreeds from "@/components/home/BestBreeds";
import FeaturedAnimals from "@/components/home/FeaturedAnimals";
export default function Home() {

  return (
    <>
       <div className=" bg-[#EEF7EE] px-5 py-2 md:px-10 lg:px-20 lg:py-20 flex justify-around mx-auto flex-col lg:flex-row  ">
      <div className=" my-auto text-start sm:text-center md:text-center lg:text-start">
        <h1 className="text-[#000000] text-3xl pt-5 sm:pt-0 sm:text-3xl md:text-4xl lg:text-6xl font-bold ">Choose the Right Animal <span className="text-[#4CAF4F] "> <br />for your qurbani</span></h1>
        <p className="text-xs sm:font-semibold pt-3 sm:pt-5 mb-3 sm:mb-7">Every animal is carefully checked for  health and quality. Choose with confidence <br /> and make your Qurbani a blessed one.</p>
        
        <Link href={"/allAnimals"} className="flex items-center gap-2 Srounded bg-[#4CAF4F] rounded-lg inline-flex px-4 text-[#FFFFFF] text-sm md:lg  mb-5 sm:mb-3"> Sell All <FaArrowRight></FaArrowRight></Link>
        
   </div>
      <div className=" order-2 lg:order-1  text-center lg:text-left">
         <Image src={cow} width={800} alt="cow"  className="rounded rounded-2xl"></Image>
      </div>
      
      </div>

      
      <FeaturedAnimals></FeaturedAnimals>
      <QurbaniTips></QurbaniTips>
      <BestBreeds></BestBreeds>
    </>
  );
}
