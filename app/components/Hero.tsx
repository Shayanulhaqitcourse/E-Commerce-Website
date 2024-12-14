import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaApple, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default function hero() {
  return (
    <div className="flex justify-center items-center px-10">
      <div className="max-w-[1440px] flex gap-6 justify-center">
        <div className="border-r-2 border-neutral-200 p-10 hidden md:block">
          <ul className="space-y-4">
            {[
              "Men's Fashion",
              "Women's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Baby's & Toys",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150"
              >
                {" "}
                <span> {item}</span>
                {index < 2 && (
                  <RiArrowDropDownLine className=" text-lg ml-2 " />
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center bg-black rounded-lg p-6 px-10">
          <div className="text-white flex flex-col justify-center space-y-5 sm:w[180px] md:w-[300px] lg:w-[400px]">
            <div className="flex items-center gap-2">
              <FaApple className="sm:text-2xl md:text-4xl" />
              <span className="sm:text-sm md:text-base font-semibold">
                {" "}
                iPhone 14 Series
              </span>
            </div>
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-sung">
              Up to 10% off Voucher
            </h1>
            <Link
              href={"#products"}
              className="underline underline-offset-4 hover:font-semibold flex item-center gap-2"
            >
              Shop Now
              <FaArrowRight />
            </Link>
          </div>
          <div className="ml-auto">
            <img src="../iphone.png" alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  );
}