import React from "react";
import { CiHeadphones, CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop} from "react-icons/hi2"
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci"
import { SiYoutubegaming } from "react-icons/si";
export default function category() {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="sm:w-full md:w-[80%] border-2 border-neutral-100 pb-10">
        <div className=" flex flex-col sm:pl[6%] md:pl-0">
          <h3 className="text-red-500 font-bold border-1-8 border-red-500 pl-3 ml-1">
            Categories
          </h3>
          <div className="flex">
            <h1 className="text-slate-800 font-bold sm-text-md md:text-3xl lg:text-3xl pt-4">
              {" "}
              Browse By Category
            </h1>
          </div>
        </div>
        <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify center items-center cursor-pointer relative">
            <CiMobile4 className="text-4xl font-bold" />
            <p className="font-normal">Phones</p>
          </div>

          <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify center items-center cursor-pointer relative">
            <HiOutlineComputerDesktop className="text-4xl font-bold" />
            <p className="font-normal">Computer</p>
            </div>
            

            <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify center items-center cursor-pointer relative">
            <BsSmartwatch className="text-4xl font-bold" />
            <p className="font-normal">Smart Watch</p>
            </div>
            </div>

            <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify center items-center cursor-pointer relative">
            <CiCamera className="text-4xl font-bold" />
            <p className="font-normal">Camera</p>
            </div>
            </div>
           
            <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify center items-center cursor-pointer relative">
            <CiHeadphones className="text-4xl font-bold" />
            <p className="font-normal">Head Phones</p>
            </div>
            </div>

            <div className="flex sm:flex-col md:flexx-rom sm:justify-center md:justify-between mt-5 sm:flex-wrap lg:flex-nowrap gap-5 sm:gap-8">
          <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
            <SiYoutubegaming className="text-4xl font-bold" />
            <p className="font-normal">Gaming</p>
            </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
