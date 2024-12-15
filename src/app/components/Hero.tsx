"use client";
import CustomButton from "./CustomButton"
import Image from "next/image";


const Hero = () => {
  const handleScroll=()=>{
   
  }
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className=" 2xl:text-[60px] sm:text-[64px] text-[50px] font-extrabold">
            Evini nasıl dekore etmek istediğini seç.
            </h1>
            <p className="text-[27px] text-gray-500 font-light mt-5">
              Sana uygun paketlerle istediğin dekorasyona anında sahip ol.
            </p>
            <CustomButton
            title="Aradığını bul"
            containerStyles="bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen pt-16">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
                <Image
          src="/images/home.jpeg"
          alt="Home Image"
          fill className="object-contain"
        />

            <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
